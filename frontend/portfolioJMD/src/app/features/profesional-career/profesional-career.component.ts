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
      period: "dic. 2023 - Actual",
      company: "EDAG Group",
      title: "Software Engineer",
      location: "Fulda, Hesse, Germany",
      achievements: [
        "Developed a tool to manage and assign staff to support shifts, starting from gathering requirements and creating functional diagrams. The frontend was built using Angular 18 with Tailwind CSS and DaisyUI, while the backend was powered by Spring Boot with JPA and PostgreSQL. Automated manual processes and improved resource planning efficiency.",
        "Handled Dockerization using Docker Compose. Ensured seamless deployment, replication, and management of services across multiple environments.",
        "Performed E2E and integration testing on critical systems using internally developed tools. Improved system stability and performance, ensuring <a href='https://youtu.be/4TYv2PhG89A?si=ac_ysiiFC-E83ivo&t=73' class='link'>smooth operations</a>.",
        "Provided DevOps support with Azure DevOps for a short period, assisting with releases and maintaining microservices for reliable deployment processes."
      ]
    },
    {
      "period": "Sept. 2022 - Dec. 2023",
      "company": "EDAG Group",
      "title": "Software Engineer Intern",
      "achievements": [
        "Configured an IoT sensor network and IP cameras using The Things Network and Fiware platforms.",
        "Developed real-time data visualization dashboards with Spring Boot, Angular, and Grafana.",
        "Designed and trained an AI-driven system for monitoring and predicting data in IoT sensor networks using LSTM neural networks and TensorFlow.",
        "Created and structured multiple datasets of historical data to train the predictive AI model, optimizing the accuracy and reliability of system predictions."
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
