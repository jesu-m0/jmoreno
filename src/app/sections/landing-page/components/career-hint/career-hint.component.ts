import { Component, OnInit } from '@angular/core';
import { RedirectButtonComponent } from '../../../../shared/elements/redirect-button/redirect-button.component';
import { TitleComponent } from '../../../../shared/elements/title/title.component';
import { SubsectionComponent } from '../../../../shared/elements/subsection/subsection.component';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from "../../../../shared/elements/experience/experience.component";
import { Experience } from '../../../../core/models/experience.model';
import { ExperienceService } from '../../../../core/services/experience.service';

@Component({
  selector: 'app-career-hint',
  imports: [
    RedirectButtonComponent,
    TitleComponent,
    SubsectionComponent,
    CommonModule,
    ExperienceComponent
],
  templateUrl: './career-hint.component.html',
  styleUrl: './career-hint.component.css',
})
export class CareerHintComponent implements OnInit{
  experience! : Experience;

  constructor(private experienceService: ExperienceService){}

  ngOnInit(): void {
    this.experience = this.experienceService.getLatestExperience();
  }
}
