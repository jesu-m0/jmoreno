import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharedComponents/navbar/navbar.component';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { LastProjectsSectionComponent } from './components/last-projects-section/last-projects-section.component';
import { LinkButtonGradientShadowComponent } from '../../sharedComponents/link-button-gradient-shadow/link-button-gradient-shadow.component';
import { CareerSectionComponent } from './components/career-section/career-section.component';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [NavbarComponent,
    LinkButtonGradientShadowComponent,
    SkillSectionComponent,
    LastProjectsSectionComponent,
    CareerSectionComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


}
