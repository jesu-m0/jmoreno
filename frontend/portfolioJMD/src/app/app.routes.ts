import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { AboutMeComponent } from './features/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about-me', component:  AboutMeComponent},

];
