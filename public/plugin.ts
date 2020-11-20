import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from 'kibana/public';
import { Plugin as ExpressionsPublicPlugin } from '../../../src/plugins/expressions/public';
//import { VisualizationsSetup } from '../../../src/legacy/core_plugins/visualizations/public';
import { VisualizationsSetup } from '../../../src/plugins/visualizations/public';
import { Timefilter } from '../../../src/plugins/data/public/query/timefilter';
import { createTransformVisDefinition } from './transform_vis';
import { createTransformVisFn } from './transform_fn';
import { getTransformRequestHandler} from './request_handler';
import { DataPublicPluginSetup, DataPublicPluginStart } from '../../../src/plugins/data/public';
import { setData } from './services';
//import { start} from './legacy'



/** @internal */
export interface TransformPluginSetupDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  data: DataPublicPluginSetup;
  dataStart: DataPublicPluginStart;
}
export interface TransformPluginStartDependencies {
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

    
  
  }
  
  public async start(core: CoreStart,{ expressions, visualizations, data, dataStart }: TransformPluginStartDependencies){
      console.log("expressione",expressions);
    console.log("visualisations",visualizations);
    console.log("data",data);
    
    //setData(dataStart);
    visualizations.createReactVisualization(
      createTransformVisDefinition({ uiSettings: core.uiSettings, es: dataStart.search.__LEGACY.esClient, data, timefilter: data.query.timefilter.timefilter})
    );
    expressions.registerFunction(() =>
      createTransformVisFn({ uiSettings: core.uiSettings, es: dataStart.search.__LEGACY.esClient })
    );
    expressions.registerType(() =>
      getTransformRequestHandler({ uiSettings: core.uiSettings, es: dataStart.search.__LEGACY.esClient, timeFilter: data.query.timefilter.timefilter  })
    );
  }
}
