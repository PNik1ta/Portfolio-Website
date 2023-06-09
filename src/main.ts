import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

let baseUrl: string = environment.gitUrl;


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
