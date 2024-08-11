import { Component } from '@angular/core';
import { ProjectsTimelineCardComponent } from '../projects-timeline-card/projects-timeline-card.component';

@Component({
  selector: 'app-projects-timeline',
  standalone: true,
  imports: [ProjectsTimelineCardComponent],
  templateUrl: './projects-timeline.component.html',
  styleUrl: './projects-timeline.component.css'
})
export class ProjectsTimelineComponent {

}
