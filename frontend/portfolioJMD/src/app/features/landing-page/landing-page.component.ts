import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharedComponents/navbar/navbar.component';
import { LinkButtonComponentComponent } from '../../sharedComponents/link-button-component/link-button-component.component';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [NavbarComponent,
    LinkButtonComponentComponent,
    SkillSectionComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


}
