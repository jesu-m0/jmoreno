// app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling:           'enabled',  // scroll to #fragment
        scrollPositionRestoration: 'enabled',  // restore on back/forward
        // scrollOffset: [0, 64],   // (optional) to offset for a fixed header
      }),

      // ← re-trigger scroll logic even if URL path stays the same
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
    ),
  ],
};
