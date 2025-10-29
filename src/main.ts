import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';
import { ToastrModule } from 'ngx-toastr';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
