import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { config } from './assets/app.config.server'; // Asegúrate de que estás importando 'config'

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const finalConfig = mergeApplicationConfig(config, serverConfig);
