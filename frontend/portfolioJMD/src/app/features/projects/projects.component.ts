import { Component } from '@angular/core';
import { ProjectsTimelineComponent } from './components/projects-timeline/projects-timeline.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsTimelineComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
