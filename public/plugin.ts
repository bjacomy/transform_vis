import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from 'kibana/public';
import { Plugin as ExpressionsPublicPlugin } from '../../../src/plugins/expressions/public';
import { VisualizationsSetup } from '../../../src/plugins/visualizations/public';
import { createTransformVisDefinition } from './transform_vis';
import { createTransformVisFn } from './transform_fn';
import { DataPublicPluginSetup, DataPublicPluginStart ,IDataPluginServices} from '../../../src/plugins/data/public';


import {
  setNotifications,
  setData,
  setSavedObjects,
  setInjectedMetadata,
} from './services';
import { setStartServices } from 'ui/new_platform/set_services';
import { HomeKibanaServices, setServices } from 'src/plugins/home/public/application/kibana_services';



/** @internal */
export interface TransformPluginSetupDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  data: DataPublicPluginSetup;
  
}
export interface TransformPluginStartDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  data: DataPublicPluginStart;
  uiActions:IDataPluginServices;
}

/** @internal */
export class TransformPlugin implements Plugin<void, void> {
  initializerContext: PluginInitializerContext;

  constructor(initializerContext: PluginInitializerContext) {
    this.initializerContext = initializerContext;
  }

  public async setup(
    core: CoreSetup,
    { expressions, visualizations, data  }: TransformPluginSetupDependencies
  ) {
  //setData(dataStart);
  const config = createTransformVisDefinition({ uiSettings: core.uiSettings,  data });
  visualizations.createReactVisualization(config);
  expressions.registerFunction(() =>
    createTransformVisFn({ uiSettings: core.uiSettings,  timeFilter: data.query.timefilter.timefilter})
  );
  
  }
  
  public async start(core: CoreStart,{ expressions, visualizations, data, uiActions }: TransformPluginStartDependencies){
    setNotifications(core.notifications);
    setSavedObjects(core.savedObjects);
    setData(data);
    setInjectedMetadata(core.injectedMetadata);
    
  
  }
}
