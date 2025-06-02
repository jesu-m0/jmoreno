import { Routes } from '@angular/router';
import { LandingPageComponent } from './sections/landing-page/landing-page.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { CareerComponent } from './sections/career/career.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'career', component: CareerComponent },
  // Projects → lazy load:
  {
    path: 'projects',
    loadComponent: () =>
      import('./sections/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
