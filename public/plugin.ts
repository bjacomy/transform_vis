import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from 'kibana/public';
import chrome from 'ui/chrome';
import { Plugin as ExpressionsPublicPlugin } from '../../../src/plugins/expressions/public';
import { VisualizationsSetup } from '../../../src/legacy/core_plugins/visualizations/public';

import { createTransformVisDefinition } from './transform_vis';
import { createTransformVisFn } from './transform_fn';
import { DataPublicPluginSetup } from '../../../src/plugins/data/public';

/** @internal */
export interface TransformPluginSetupDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  data: DataPublicPluginSetup;
}

/** @internal */
export class TransformPlugin implements Plugin<void, void> {
  initializerContext: PluginInitializerContext;

  constructor(initializerContext: PluginInitializerContext) {
    this.initializerContext = initializerContext;
  }

  public async setup(
    core: CoreSetup,
    { expressions, visualizations, data }: TransformPluginSetupDependencies
  ) {
    const $injector = await chrome.dangerouslyGetActiveInjector();
    visualizations.types.createReactVisualization(
      createTransformVisDefinition({ uiSettings: core.uiSettings, es: $injector.get('es'), data })
    );
    expressions.registerFunction(() =>
      createTransformVisFn({ uiSettings: core.uiSettings, es: $injector.get('es') })
    );
  }

  public async start(core: CoreStart) {}
}
