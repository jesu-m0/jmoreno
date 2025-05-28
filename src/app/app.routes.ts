import { Routes } from '@angular/router';
import { LandingPageComponent } from './sections/landing-page/landing-page.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { CareerComponent } from './sections/career/career.component';
import { ProjectsComponent } from './sections/projects/projects.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'career', component: CareerComponent },
    { path: 'projects', component: ProjectsComponent },

    { path: '**', redirectTo: '' }
];
