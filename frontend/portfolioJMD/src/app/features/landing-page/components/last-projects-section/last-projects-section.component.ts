import { Component } from '@angular/core';
import { LinkButtonGradientShadowComponent } from '../../../../sharedComponents/link-button-gradient-shadow/link-button-gradient-shadow.component';

@Component({
  selector: 'app-last-projects-section',
  standalone: true,
  imports: [
    LinkButtonGradientShadowComponent
  ],
  templateUrl: './last-projects-section.component.html',
  styleUrl: './last-projects-section.component.css'
})
export class LastProjectsSectionComponent {

}
