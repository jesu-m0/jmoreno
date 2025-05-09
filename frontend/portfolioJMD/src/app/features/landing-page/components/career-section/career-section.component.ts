import { Component } from '@angular/core';
import { LinkButtonGradientShadowComponent } from '../../../../sharedComponents/link-button-gradient-shadow/link-button-gradient-shadow.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-career-section',
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
        "Developed a tool to manage and assign staff to support shifts, starting from gathering requirements and creating functional diagrams. The frontend was built using <strong class='font-bold'>Angular 18</strong> with <strong class='font-bold'>Tailwind CSS</strong> and <strong class='font-bold'>DaisyUI</strong>, while the backend was powered by <strong class='font-bold'>Spring Boot</strong> with <strong class='font-bold'>JPA</strong> and <strong class='font-bold'>PostgreSQL</strong>. Automated manual processes and improved resource planning efficiency.",
        "Handled Dockerization using <strong class='font-bold'>Docker Compose</strong>. Ensured seamless deployment, replication, and management of services across multiple environments.",
        "Performed <strong class='font-bold'>E2E and integration testing</strong> on critical systems using internally developed tools. Improved system stability and performance, ensuring <a href='https://youtu.be/4TYv2PhG89A?si=ac_ysiiFC-E83ivo&t=73' class='link'>smooth operations</a>.",
        "Provided DevOps support with <strong class='font-bold'>Azure DevOps</strong> for a short period, assisting with releases and maintaining microservices for reliable deployment processes."
      ]
    }
  ]

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeHtml(htmlContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  ngOnInit(): void { }
}
