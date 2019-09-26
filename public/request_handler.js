import chrome from 'ui/chrome';
import { BuildESQueryProvider } from '@kbn/es-query'
import { transform } from '@babel/standalone';

const Mustache = require('mustache');

const babelTransform = (code) => transform(code, { presets: ['es2015'], plugins: ['transform-async-to-generator'] }).code;

export function RequestHandlerProvider (Private, es) {

  const deprecationsMonitoringEnabled = () => chrome.getUiSettingsClient().get('transform_vis:deprecations')

  const findAggregationResults = (path, aggregations) => {
    return [...(aggregations.buckets ? [{ path, bucketsSize: aggregations.buckets.length}] : []), ...Object.keys(aggregations).filter(key => Object.prototype.toString.call(aggregations[key]) === '[object Object]').reduce((acc, key) => [...acc, ...findAggregationResults([...path, key], aggregations[key])], [])]
  }

  const es_search = es.search;
  es.search = function (...args) {
    const req = args[0]
    return es_search.apply(es, args).then(function (response) {
      if (deprecationsMonitoringEnabled() && response.aggregations) {
        const aggs = findAggregationResults([], response.aggregations)
        const totalBucketsSize = aggs.reduce((acc, next) => acc + next.bucketsSize, 0)
        const maxBucketsSize = Math.max(...aggs.map(({ bucketsSize }) => bucketsSize))
        if (totalBucketsSize >= 0) {
          console.groupCollapsed(`[TMT] While requesting '${req.index}' index, returned total ${totalBucketsSize} buckets (maximum ${maxBucketsSize}) in aggregations`)
          console.log('[TMT] request', req)
          console.log('[TMT] response', response)
          console.table(aggs.map(({ path, bucketsSize }) => ({ '[TMT] key': path.join('.'), bucketsSize })), [])
          console.groupEnd()
        }
      }
      return response
    })
  }

  const myRequestHandler = function ({ timeRange, filters, query, queryFilter, searchSource, visParams }) {

    const buildEsQuery = Private(BuildESQueryProvider);
    const options = chrome.getInjected('transformVisOptions');

    const display_error = (displayMessage, consoleMessage, error) => {
      if (consoleMessage !== undefined && error !== undefined) {
        console.error(consoleMessage, error);
      }
      return ({ html: `<div style="text-align: center;"><i>${displayMessage}</i></div>` });
    };


    if (!visParams.multiquerydsl) {
      return display_error('Multy Query DSL is empty');
    }
    // debugger
    const context = buildEsQuery(undefined, [query, searchSource.getFields().query], [...filters, ...searchSource.getFields().filter.filter(i => !i.meta.disabled)]);

    let multiquerydsl = {};
    try {
      let multiquerydsltext = visParams.multiquerydsl;
      multiquerydsltext = multiquerydsltext.replace(/"_DASHBOARD_CONTEXT_"/g, JSON.stringify(context));
      multiquerydsltext = multiquerydsltext.replace(/"_TIME_RANGE_\[([^\]]*)\]"/g, `{"range":{"$1":{"gte": "${timeRange.from}", "lte": "${timeRange.to}"}}}`);
      multiquerydsl = JSON.parse(multiquerydsltext);
    } catch (error) {
      return display_error('Error (See Console)', 'MultiqueryDSL Parse Error', error);
    }

    const bindme = {};
    bindme.context = context;
    bindme.vis = this.vis;
    bindme.timefilter = this.vis.API.timeFilter;
    bindme.timeRange = this.vis.API.timeFilter.getTime();
    bindme.visTitle = this.vis.title;
    bindme.buildEsQuery = buildEsQuery;
    bindme.es = es;
    bindme.response = {};

    const fillPrevioudContext = (body, previousContextValue) =>
      Object.keys(body).map(key => {
        if (body[key] === '_PREVIOUS_CONTEXT_') {
          body[key] = previousContextValue;
        } else if (typeof body[key] === 'object') {
          fillPrevioudContext(body[key], previousContextValue);
        }
      });

    const makeQuery = async (query_name) => {
      const body = multiquerydsl[query_name];
      const index = body['index'];
      delete body['index'];
      if (body.previousContextSource !== undefined) {
        const previousContextSource = body.previousContextSource;
        try {
          const response = bindme.response;
          const meta = bindme.meta;
          const previousContextValue = eval(babelTransform(previousContextSource));
          fillPrevioudContext(body, typeof previousContextValue === 'function' ? await previousContextValue() : previousContextValue);
        } catch (error) {
          return display_error('Error (See Console)', 'Previous Context Parse Error', error);
        }
        delete body['previousContextSource'];
      }
      return es.search({
        index: index,
        body: body,
      }).then(function (response) {
        if (query_name === '_single_') {
          bindme.response = Object.assign(bindme.response, response);
        } else {
          bindme.response = Object.assign(bindme.response, { [query_name]: response });
        }
      });
    };

    const evalMeta = () => {
      if (options.allow_unsafe) {
        try {
          const response = bindme.response;
          if (deprecationsMonitoringEnabled() && (visParams.meta.includes('.vis.API') || visParams.meta.includes('.vis.title')))
            console.warn(`[TMT] [DEPRECATION] Visualisation '${this.vis.title}' uses deprecated api`)
          bindme.meta = eval(babelTransform(visParams.meta));
        } catch (jserr) {
          bindme.jserr = jserr;
          return display_error('Error (See Console)', 'Javascript Compilation Error', jserr);
        }
      }
    };

    const fillTempate = async () => {
      const formula = visParams.formula;
      try {
        const awaitContext = {}
        for (let key of Object.keys(bindme.meta)) {
          awaitContext[key] = (typeof(bindme.meta[key]) === 'function' && key !== 'after_render') ? await bindme.meta[key].bind(bindme)() : bindme.meta[key]
        }
        return ({ html: Mustache.render(formula, { ...bindme, meta: awaitContext }), meta: bindme.meta, es, context });
      } catch (error) {
        return display_error('Error (See Console)', 'Mustache Template Error', error);
      }
    };

    return Promise.all(Object.keys(multiquerydsl).filter(query => multiquerydsl[query].previousContextSource === undefined).map(makeQuery))
      .then(evalMeta)
      .then(_ => Object.keys(multiquerydsl).filter(query => multiquerydsl[query].previousContextSource !== undefined).reduce((acc,curr) => acc.then(_ => makeQuery(curr)), Promise.resolve()))
      .then(evalMeta)
      .then(fillTempate)
      .catch(error => display_error('Error (See Console)', 'Elasticsearch Query Error', error))

  };

  return myRequestHandler;

};