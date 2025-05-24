import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeHintComponent } from './components/about-me-hint/about-me-hint.component';
import { CareerHintComponent } from './components/career-hint/career-hint.component';
import { ProjectHintComponent } from './components/project-hint/project-hint.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroComponent,
    AboutMeHintComponent,
    CareerHintComponent,
    ProjectHintComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
