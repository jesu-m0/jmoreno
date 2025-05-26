import { Component } from '@angular/core';
import { TitleComponent } from "../../shared/elements/title/title.component";
import { ProjectCardV3Component } from "../../shared/elements/project-card-v3/project-card-v3.component";
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    TitleComponent,
    ProjectCardV3Component,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService:ProjectService){}

  ngOnInit(){
    this.projects = this.projectService.getProjects();
    console.log("projects", this.projects);

  }
}
