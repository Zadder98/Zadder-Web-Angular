import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

//___componente de toda la app______________________//
import { AppComponent } from './app/app.component';
//___________________________________________________//

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
