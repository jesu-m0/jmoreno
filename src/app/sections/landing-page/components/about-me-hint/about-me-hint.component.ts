import { Component } from '@angular/core';
import { RedirectButtonComponent } from '../../../../shared/elements/redirect-button/redirect-button.component';
import { MainSkillsHintComponent } from '../main-skills-hint/main-skills-hint.component';
import { TitleComponent } from '../../../../shared/elements/title/title.component';

@Component({
  selector: 'app-about-me-hint',
  imports: [
    RedirectButtonComponent,
    MainSkillsHintComponent,
    TitleComponent
  ],
  templateUrl: './about-me-hint.component.html',
  styleUrl: './about-me-hint.component.css'
})
export class AboutMeHintComponent {

}
