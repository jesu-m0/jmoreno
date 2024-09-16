import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProfesionalCareerComponent } from './features/profesional-career/profesional-career.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'career', component: ProfesionalCareerComponent },
    { path: 'about', component:  AboutMeComponent},

];
