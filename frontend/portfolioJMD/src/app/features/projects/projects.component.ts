import { Component, inject } from '@angular/core';
import { ProjectsTimelineComponent } from './components/projects-timeline/projects-timeline.component';
import { Project, ProjectService } from '../../config/project.service';
import { ProjectCardComponent } from '../../sharedComponents/project-card/project-card.component';

@Component({
    selector: 'app-projects',
    imports: [ProjectsTimelineComponent, ProjectCardComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [];

  private projectService = inject(ProjectService);

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  
}
