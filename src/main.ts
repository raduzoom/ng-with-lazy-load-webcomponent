import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import './polyfills';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig).then(ref => {
  // Ensure Angular destroys itself on hot reloads.

  const win = (<any>window);
  if (win['ngRef']) {
    win['ngRef'].destroy();
  }
  win['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
