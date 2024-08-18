import { Component } from '@angular/core';
import { LinkButtonComponentComponent } from '../../../../sharedComponents/link-button-component/link-button-component.component';

@Component({
  selector: 'app-projects-timeline-card',
  standalone: true,
  imports: [
    LinkButtonComponentComponent
  ],
  templateUrl: './projects-timeline-card.component.html',
  styleUrl: './projects-timeline-card.component.css'
})
export class ProjectsTimelineCardComponent {

}
