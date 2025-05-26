import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/elements/project-card/project-card.component';
import { ProjectCardV2Component } from '../../../../shared/elements/project-card-v2/project-card-v2.component';
import { RedirectButtonComponent } from "../../../../shared/elements/redirect-button/redirect-button.component";
import { ProjectCardV3Component } from "../../../../shared/elements/project-card-v3/project-card-v3.component";
import { TitleComponent } from "../../../../shared/elements/title/title.component";

@Component({
  selector: 'app-project-hint',
  imports: [
    ProjectCardComponent,
    ProjectCardV2Component,
    RedirectButtonComponent,
    ProjectCardV3Component,
    TitleComponent
],
  templateUrl: './project-hint.component.html',
  styleUrl: './project-hint.component.css'
})
export class ProjectHintComponent {

}
