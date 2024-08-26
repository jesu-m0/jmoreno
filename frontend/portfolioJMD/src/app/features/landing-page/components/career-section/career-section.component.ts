import { Component } from '@angular/core';
import { LinkButtonGradientShadowComponent } from '../../../../sharedComponents/link-button-gradient-shadow/link-button-gradient-shadow.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career-section',
  standalone: true,
  imports: [LinkButtonGradientShadowComponent, CommonModule],
  templateUrl: './career-section.component.html',
  styleUrl: './career-section.component.css'
})
export class CareerSectionComponent {
  experiences = [
    {
      period: "dic. 2023 - Actual",
      company: "EDAG Group",
      title: "Software Engineer",
      location: "Fulda, Hesse, Germany",
      achievements: [
        "T",
        "O",
        "D",
        "O"
      ]
    }
  ]
}
