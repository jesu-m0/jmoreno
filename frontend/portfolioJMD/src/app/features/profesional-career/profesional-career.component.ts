import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-profesional-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesional-career.component.html',
  styleUrl: './profesional-career.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProfesionalCareerComponent implements OnInit {
  experiences = [
    {
      period: "Dec. 2023 - Actual",
      company: "EDAG Group",
      title: "Software Engineer",
      location: "Fulda, Hesse, Germany",
      achievements: [
        "Developed a tool to manage and assign staff to support shifts, starting from gathering requirements and creating functional diagrams. The frontend was built using <strong class='font-bold'>Angular 18</strong> with <strong class='font-bold'>Tailwind CSS</strong> and <strong class='font-bold'>DaisyUI</strong>, while the backend was powered by <strong class='font-bold'>Spring Boot</strong> with <strong class='font-bold'>JPA</strong> and <strong class='font-bold'>PostgreSQL</strong>. Automated manual processes and improved resource planning efficiency.",
        "Handled Dockerization using <strong class='font-bold'>Docker Compose</strong>. Ensured seamless deployment, replication, and management of services across multiple environments.",
        "Performed <strong class='font-bold'>E2E and integration testing</strong> on critical systems using internally developed tools. Improved system stability and performance, ensuring <a href='https://youtu.be/4TYv2PhG89A?si=ac_ysiiFC-E83ivo&t=73' class='link' target='_blank' rel='noopener noreferrer'>smooth operations</a>.",
        "Provided DevOps support with <strong class='font-bold'>Azure DevOps</strong> for a short period, assisting with releases and maintaining microservices for reliable deployment processes."
      ]
    },
    {
      "period": "Sept. 2022 - Dec. 2023",
      "company": "EDAG Group",
      "title": "Software Engineer Intern",
      "achievements": [
        "Developed real-time data visualization dashboards with <strong class='font-bold'>Spring Boot</strong>, <strong class='font-bold'>Angular</strong>, and <strong class='font-bold'>Grafana</strong>.",
        "Designed and trained an <strong class='font-bold'>AI-driven system</strong> for monitoring and predicting data in <strong class='font-bold'>IoT sensor networks</strong> using <strong class='font-bold'>LSTM neural networks</strong> and <strong class='font-bold'>TensorFlow</strong>.",
        "Created and structured multiple datasets of historical data to train the predictive AI model, optimizing the accuracy and reliability of system predictions.",
        "Configured an <strong class='font-bold'>IoT sensor network</strong> and <strong class='font-bold'>IP cameras</strong> using <strong class='font-bold'>The Things Network</strong> and <strong class='font-bold'>Fiware platforms</strong>."
      ],
      "location": "Fulda, Hesse, Germany"
    }

  ];

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeHtml(htmlContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  ngOnInit(): void { }

}
