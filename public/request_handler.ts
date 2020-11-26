import { transform } from '@babel/standalone';
import { IUiSettingsClient } from 'kibana/public';
import Mustache from 'mustache';
import { Timefilter } from '../../../src/plugins/data/public/query/timefilter';

import {InjectedMetadataSetup} from '../../../src/core/public/injected_metadata'
import { esQuery, TimeRange, Query, Filter} from '../../../src/plugins/data/public';
import { VisParams } from '../../../src/plugins/visualizations/public';
import { TransformVisData } from './types';

import { getData} from './services';
import { DataPublicPluginStart } from '../../../src/plugins/data/public';

const babelTransform = (code: string) => {
  return transform(code, {
    presets: ['es2015'],
    plugins: ['transform-async-to-generator'],
  }).code;
};

export function getTransformRequestHandler({
                                             uiSettings,                                           
                                             timeFilter
                                           }: {
  uiSettings: IUiSettingsClient;
  timeFilter:Timefilter
} ,abortSignal?: AbortSignal ) {
  return async ({
                  timeRange,
                  filters,
                  query,
                  visParams,
                }: {
    timeRange: TimeRange | null;
    filters: Filter[] | null;
    query: Query | null;
    visParams: VisParams;
  }): Promise<TransformVisData> => {
    const data : DataPublicPluginStart = getData();
    const es = data.search.__LEGACY.esClient;
    const settings = uiSettings;
    const options : InjectedMetadataSetup["getInjectedVar"]= (name= 'transformVisOptions', defaultValue= 'undefined')=> {};
    const _timeRange: TimeRange = timeRange || settings.get('timepicker:timeDefaults');
    const _filters = filters || [];
    const _query = query || { language: 'kquery', query: '' };

    const logError = (consoleMessage: string, error?: any) => {
      if (consoleMessage !== undefined && error !== undefined) {
        // eslint-disable-next-line no-console
        console.error(`[${consoleMessage}]`, ...(Array.isArray(error) ? error : [error]));
      }
      throw consoleMessage;
    };

    const esQueryConfigs = esQuery.getEsQueryConfig(uiSettings);
    const context = esQuery.buildEsQuery(undefined, _query, _filters, esQueryConfigs);

    const bindme: Record<string, any> = {};
    bindme.context = context;
    bindme.timefilter = timeFilter;
    bindme.timeRange = _timeRange;
    bindme.buildEsQuery = esQuery.buildEsQuery;
    bindme.es = es;
    bindme.response = {};

    const parseMultiqueryDsl = (_multiquerydsltext: string | undefined): Record<string, any> => {
      try {
        let multiquerydsltext = _multiquerydsltext || '{}';
        multiquerydsltext = multiquerydsltext.replace(
          /"_DASHBOARD_CONTEXT_"/g,
          JSON.stringify(context)
        );
        multiquerydsltext = multiquerydsltext.replace(
          /"_TIME_RANGE_\[([^\]]*)]"/g,
          `{"range":{"$1":{"gte": "${_timeRange.from}", "lte": "${_timeRange.to}"}}}`
        );
        return JSON.parse(multiquerydsltext);
      } catch (error) {
        return logError('MultiqueryDSL Parse Error', error);
      }
    }

    const fillPrevioudContext = (body: Record<string, any>, previousContextValue: any) =>
      Object.keys(body).map(key => {
        if (body[key] === '_PREVIOUS_CONTEXT_') {
          body[key] = previousContextValue;
        } else if (typeof body[key] === 'object') {
          fillPrevioudContext(body[key], previousContextValue);
        }
      });

    const makeQuery = async (queryName: string, body: Record<string, any>, response?: any, meta?: any) => {
      const index = body.index;
      delete body.index;
      if (body.previousContextSource !== undefined) {
        const previousContextSource = body.previousContextSource;
        try {
          // @ts-ignore используется без var/let/const, а как необязатеьный параметр, чтобы не переименовывался при оптимизиции кода
          response = bindme.response;
          // @ts-ignore используется без var/let/const, а как необязатеьный параметр, чтобы не переименовывался при оптимизиции кода
          meta = bindme.meta;
          // eslint-disable-next-line no-eval
          const previousContextValue = eval(babelTransform(previousContextSource) || '');
          fillPrevioudContext(
            body,
            typeof previousContextValue === 'function'
              ? await previousContextValue()
              : previousContextValue
          );
        } catch (error) {
          return logError('Previous Context Error', [ `"${queryName}" query: `, error ]);
        }
        delete body.previousContextSource;
      }
        return es
        .search({
          index,
          body,
        })
        .then(function (response: { error: any; }) {
          // @ts-ignore
          if (response.error) throw response.error;
          if (queryName === '_single_') {
            bindme.response = Object.assign(bindme.response, response);
          } else {
            bindme.response = Object.assign(bindme.response, { [queryName]: response });
          }
        })
        .catch((error: any) => logError('Elasticsearch Query Error', [ `"${queryName}" query:\nGET ${index}/_search\n${JSON.stringify(body, null, 2)}`, error ]));
    };

    const evalMeta = (response?: any) => {
      if (options.name) {
        try {
          // @ts-ignore используется без var/let/const, а как необязатеьный параметр, чтобы не переименовывался при оптимизиции кода
          response = bindme.response;
          // eslint-disable-next-line no-eval
          bindme.meta = eval(babelTransform(visParams.meta) || '');
        } catch (jserr) {
          bindme.jserr = jserr;
          return logError('Javascript Compilation Error', jserr);
        }
      }
    };

    const fillTempate = async () => {
      const formula = visParams.formula;
      const awaitContext: Record<string, any> = {};
      try {
        for (const key of Object.keys(bindme.meta)) {
          awaitContext[key] =
            typeof bindme.meta[key] === 'function' && key !== 'after_render'
              ? await bindme.meta[key].bind(bindme)()
              : bindme.meta[key];
        }
      } catch (error) {
        return logError('Javascript Execution Error', error);
      }
      try {
        return {
          transform: Mustache.render(formula, { ...bindme, meta: awaitContext }),
          meta: bindme.meta,
          es,
          context,
          timeFilter,
          timeRange,
          buildEsQuery: esQuery.buildEsQuery,
        };
      } catch (error) {
        return logError('Mustache Template Error', error);
      }
    };

    return Promise.resolve()
      .then(evalMeta)
      .then(() => parseMultiqueryDsl(visParams.multiquerydsl))
      .then(multiqueryDsl =>
        Promise.all(
          Object.entries(multiqueryDsl)
            .filter(([, { previousContextSource }]) => previousContextSource === undefined)
            .map(([queryName, __query]) => makeQuery(queryName, __query))
        )
          .then(() =>
            Object.entries(multiqueryDsl)
              .filter(([, { previousContextSource }]) => previousContextSource !== undefined)
              .reduce(
                (acc, [queryName, __query]) =>
                  acc.then(() => makeQuery(queryName, __query)),
                Promise.resolve()
              )
          )
      )
      .then(fillTempate)
      .catch((error: Error | string) => {
        if (typeof (error) !== 'string') {
          console.error('[Unknown error]', error)
        }
        try {
          if (bindme.meta['on_error']) {
            return ({ transform: typeof(bindme.meta['on_error']) === 'function' ? bindme.meta['on_error']() : bindme.meta['on_error'] })
          }
        } catch (error) {
        }
        return ({ transform: `<div style="text-align: center;"><i>Error (See Console)</i></div>` })
      });
  };
}
