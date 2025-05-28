// app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),

    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling:           'enabled',  // scroll to #fragment
        scrollPositionRestoration: 'enabled',  // restore on back/forward
      }),

      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
    ),
  ],
};
