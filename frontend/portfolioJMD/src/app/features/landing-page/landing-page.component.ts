import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../sharedComponents/navbar/navbar.component';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { LastProjectsSectionComponent } from './components/last-projects-section/last-projects-section.component';
import { LinkButtonGradientShadowComponent } from '../../sharedComponents/link-button-gradient-shadow/link-button-gradient-shadow.component';
import { CareerSectionComponent } from './components/career-section/career-section.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'landing-page',
    imports: [
        NavbarComponent,
        LinkButtonGradientShadowComponent,
        SkillSectionComponent,
        LastProjectsSectionComponent,
        CareerSectionComponent,
        RouterModule
    ],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
