import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from 'kibana/public';
import { Plugin as ExpressionsPublicPlugin } from '../../../src/plugins/expressions/public';
//import { VisualizationsSetup } from '../../../src/legacy/core_plugins/visualizations/public';
import { VisualizationsSetup } from '../../../src/plugins/visualizations/public';
import { Timefilter } from '../../../src/plugins/data/public/query/timefilter';
import { createTransformVisDefinition } from './transform_vis';
import { createTransformVisFn } from './transform_fn';
import { getTransformRequestHandler} from './request_handler';
import { DataPublicPluginSetup, DataPublicPluginStart ,IDataPluginServices} from '../../../src/plugins/data/public';
import { setData, setInjectedMetadata,setInjectedVars  } from './services';
import { SearchAPI } from './data_model/search_api'
//import { start} from './legacy'



/** @internal */
export interface TransformPluginSetupDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  data: DataPublicPluginSetup;
  dataStart: SearchAPI;
}
export interface TransformPluginStartDependencies {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  visualizations: VisualizationsSetup;
  data: DataPublicPluginSetup;
  dataStart: SearchAPI;
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
    { expressions, visualizations, data, dataStart }: TransformPluginSetupDependencies
  ) {
  //setData(dataStart);
  const config = createTransformVisDefinition({ uiSettings: core.uiSettings, es: dataStart, data, timefilter: data.query.timefilter.timefilter});
  visualizations.createReactVisualization(config);
  ////console.log("dataStartold",dataStartold)
  expressions.registerFunction(() =>
    createTransformVisFn({ uiSettings: core.uiSettings, es: dataStart , timeFilter: data.query.timefilter.timefilter})
  );
  /* expressions.registerType(() =>
    getTransformRequestHandler({ uiSettings: core.uiSettings,es: dataStart, timeFilter: data.query.timefilter.timefilter  })
  );*/
    
  
  }
  
  public async start(core: CoreStart,{ expressions, visualizations, data, dataStart, uiActions }: TransformPluginStartDependencies){
    console.log("expressione",expressions);
    console.log("visualisations",visualizations);
    console.log("data",data);
    console.log("data",uiActions);
  //setData(dataStart);
    
  
  }
}
