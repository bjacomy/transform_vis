import { PluginInitializerContext } from 'kibana/public';
import { npSetup, npStart } from 'ui/new_platform';

import { TransformPluginSetupDependencies } from './plugin';
import { plugin } from '.';

const plugins: Readonly<TransformPluginSetupDependencies> = {
  expressions: npSetup.plugins.expressions,
  visualizations: npSetup.plugins.visualizations,
  data: npSetup.plugins.data,
  dataStart: npStart.plugins.data,
};

const pluginInstance = plugin({} as PluginInitializerContext);

export const setup = pluginInstance.setup(npSetup.core, plugins);
export const start = pluginInstance.start(npStart.core);
