import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare let Neutralino: any;

if (environment.production) {
  enableProdMode();
}

Neutralino.init();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
