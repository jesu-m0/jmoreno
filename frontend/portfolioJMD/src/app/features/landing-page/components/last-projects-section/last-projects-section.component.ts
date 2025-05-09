import { Component, inject } from '@angular/core';
import { LinkButtonGradientShadowComponent } from '../../../../sharedComponents/link-button-gradient-shadow/link-button-gradient-shadow.component';
import { Project, ProjectService } from '../../../../config/project.service';
import { ProjectCardComponent } from '../../../../sharedComponents/project-card/project-card.component';

@Component({
    selector: 'app-last-projects-section',
    imports: [
        LinkButtonGradientShadowComponent,
        ProjectCardComponent
    ],
    templateUrl: './last-projects-section.component.html',
    styleUrl: './last-projects-section.component.css'
})
export class LastProjectsSectionComponent {

  private projectService = inject(ProjectService);

  projects: Project[]=[]

  ngOnInit(): void {
      this.projects = this.projectService.get2Projects();
    }

}
