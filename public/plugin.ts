import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from 'kibana/public';
import { Plugin as ExpressionsPublicPlugin } from '../../../src/plugins/expressions/public';
import { VisualizationsSetup } from '../../../src/legacy/core_plugins/visualizations/public';

import { createTransformVisDefinition } from './transform_vis';
import { createTransformVisFn } from './transform_fn';
import { DataPublicPluginSetup, DataPublicPluginStart } from '../../../src/plugins/data/public';

/** @internal */
export interface TransformPluginSetupDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  data: DataPublicPluginSetup;
  dataStart: DataPublicPluginStart;
}

/** @internal */
export class TransformPlugin implements Plugin<void, void> {
  initializerContext: PluginInitializerContext;

  constructor(initializerContext: PluginInitializerContext) {
    this.initializerContext = initializerContext;
  }

  public async setup(
    core: CoreSetup,
    { expressions, visualizations, data, dataStart }: TransformPluginSetupDependencies
  ) {
    visualizations.createReactVisualization(
      createTransformVisDefinition({ uiSettings: core.uiSettings, es: dataStart.search.__LEGACY.esClient, data })
    );
    expressions.registerFunction(() =>
      createTransformVisFn({ uiSettings: core.uiSettings, es: dataStart.search.__LEGACY.esClient })
    );
  }

  public async start(core: CoreStart) {}
}
