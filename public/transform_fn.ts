/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { get } from 'lodash';
import { i18n } from '@kbn/i18n';
import { IUiSettingsClient } from 'kibana/public';
import { ExpressionFunctionDefinition, Render, KibanaContext } from '../../../src/plugins/expressions/public';
import { Arguments, TransformVisParams } from './types';
import { getTransformRequestHandler } from './request_handler';
import { LegacyApiCaller } from '../../../src/plugins/data/public/search/es_client';

interface RenderValue {
  visType: 'transform';
  visData: any;
  visConfig: TransformVisParams;
}

export const createTransformVisFn = ({
  uiSettings,
  es,
}: {
  uiSettings: IUiSettingsClient;
  es: LegacyApiCaller;
}): ExpressionFunctionDefinition<'transform_vis', KibanaContext | null, Arguments, Promise<Render<RenderValue>>> => ({
  name: 'transform_vis',
  type: 'render',
  inputTypes: ['kibana_context', 'null'],
  help: i18n.translate('visTypeTransform.function.help', {
    defaultMessage: 'Transform visualization',
  }),
  args: {
    multiquerydsl: {
      types: ['string'],
      required: true,
      help: i18n.translate('visTypeTransform.function.multiquerydsl.help', {
        defaultMessage: 'Requests to query ES data',
      }),
    },
    meta: {
      types: ['string'],
      required: true,
      help: i18n.translate('visTypeTransform.function.meta.help', {
        defaultMessage: 'Javascript functions to transform requested data',
      }),
    },
    formula: {
      types: ['string'],
      required: true,
      help: i18n.translate('visTypeTransform.function.formula.help', {
        defaultMessage: 'Mustache template to render visualisation',
      }),
    },
  },
  async fn(input, args) {
    const transformRequestHandler = getTransformRequestHandler({ uiSettings, es });
    const response = await transformRequestHandler({
      timeRange: get(input, 'timeRange', null),
      query: get(input, 'query', null),
      filters: get(input, 'filters', null),
      visParams: args,
    });

    return {
      type: 'render',
      as: 'visualization',
      value: {
        visType: 'transform',
        visConfig: {
          multiquerydsl: args.multiquerydsl,
          meta: args.meta,
          formula: args.formula,
        },
        visData: response,
      },
    };
  },
});
