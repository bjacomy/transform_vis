import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { TransformPluginSetup, TransformPluginStart } from './types';
import { defineRoutes } from './routes';
import { Server } from 'http';

export class TransformPlugin
  implements Plugin<TransformPluginSetup, TransformPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('transform-vis: Setup');
    console.log('transform-vis: Setup');
    const router = core.http.createRouter();
    // Register server side APIs
    defineRoutes(router);
    
    return {};
  }

  public start(core: CoreStart) {
    console.log('transform-vis: Start');
    this.logger.debug('transform-vis: Started');
    return {};
  }

  public stop() {}
}
