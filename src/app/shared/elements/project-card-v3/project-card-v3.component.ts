import { Component, Input } from '@angular/core';
import { SubsectionComponent } from "../subsection/subsection.component";
import { RedirectButtonComponent } from "../redirect-button/redirect-button.component";
import { Project } from '../../../core/models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card-v3',
  imports: [
    SubsectionComponent,
    RedirectButtonComponent,
    CommonModule
  ],
  templateUrl: './project-card-v3.component.html',
  styleUrl: './project-card-v3.component.css',
})
export class ProjectCardV3Component {
  @Input() project!:Project;
  @Input() index!:string;
}
