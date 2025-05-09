import { Component } from '@angular/core';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-about-me',
    imports: [SkillsSectionComponent, ContactFormComponent, RouterModule],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
