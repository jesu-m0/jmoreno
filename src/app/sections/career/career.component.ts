import { Component } from '@angular/core';
import { TitleComponent } from "../../shared/elements/title/title.component";
import { SubsectionComponent } from "../../shared/elements/subsection/subsection.component";
import { ExperienceComponent } from "../../shared/elements/experience/experience.component";
import { EducationCardComponent } from "./components/education-card/education-card.component";

@Component({
  selector: 'app-career',
  imports: [TitleComponent, SubsectionComponent, ExperienceComponent, EducationCardComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

}
