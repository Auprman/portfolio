import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),]
};
