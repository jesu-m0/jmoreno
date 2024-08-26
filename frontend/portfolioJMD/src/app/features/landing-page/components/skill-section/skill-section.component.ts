import { Component } from '@angular/core';
import { LinkButtonComponentComponent } from '../../../../sharedComponents/link-button-component/link-button-component.component';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [LinkButtonComponentComponent],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.css'
})
export class SkillSectionComponent {

}
