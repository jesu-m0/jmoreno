import { Component } from '@angular/core';
import { LinkButtonComponentComponent } from '../../../../sharedComponents/link-button-component/link-button-component.component';

@Component({
  selector: 'app-last-projects-section',
  standalone: true,
  imports: [
    LinkButtonComponentComponent
  ],
  templateUrl: './last-projects-section.component.html',
  styleUrl: './last-projects-section.component.css'
})
export class LastProjectsSectionComponent {

}
