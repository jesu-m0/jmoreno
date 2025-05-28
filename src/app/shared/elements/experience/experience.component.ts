import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experience = {
    period: 'Dec 2023 - Nov 2024',
    company: 'EDAG Group',
    title: 'Software Engineer',
    location: 'Fulda, Hesse, Germany',
    achievements: [
      "Developed a tool to manage and assign staff to support shifts, starting from gathering requirements and creating functional diagrams. The frontend was built using <span class='text-black'>Angular 18</span> with <span class='text-black'>Tailwind CSS</span> and DaisyUI, while the backend was powered by <span class='text-black'>Spring Boot with JPA and PostgreSQL</span>. Automated manual processes and improved resource planning efficiency.",
      "Handled Dockerization using <span class='text-black'>Docker Compose</span>. Ensured seamless deployment, replication, and management of services across multiple environments.",
      "Performed <span class='text-black'>E2E and integration testing</span> on critical systems using internally developed tools. Improved system stability and performance, ensuring <a href='https://youtu.be/4TYv2PhG89A?si=ac_ysiiFC-E83ivo&t=73' class='link' target='_blank' rel='noopener noreferrer'>smooth operations</a>.",
      "Provided DevOps support with <span class='text-black'>Azure DevOps</span> for a short period, assisting with releases and maintaining microservices for reliable deployment processes.",
    ],
  };

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeHtml(htmlContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }
}
