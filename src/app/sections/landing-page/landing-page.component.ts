import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeHintComponent } from './components/about-me-hint/about-me-hint.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    AboutMeHintComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
