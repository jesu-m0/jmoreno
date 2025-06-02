import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../shared/elements/title/title.component';
import { SubsectionComponent } from '../../shared/elements/subsection/subsection.component';
import { ExperienceComponent } from '../../shared/elements/experience/experience.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { Experience } from '../../core/models/experience.model';
import { ExperienceService } from '../../core/services/experience.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career',
  imports: [
    TitleComponent,
    SubsectionComponent,
    ExperienceComponent,
    EducationCardComponent,
    CommonModule,
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
})
export class CareerComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.experienceService.getAllExperiences();
  }
}
