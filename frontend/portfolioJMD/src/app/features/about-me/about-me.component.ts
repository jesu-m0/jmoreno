import { Component } from '@angular/core';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkillsSectionComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
