import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private professionalExperience: Experience[] = [
    {
      company: 'EDAG Group',
      role: 'Software Engineer',
      location: 'Fulda, Hesse, Germany',
      period: 'Sept 2022 - Nov 2024',
      roleHighlights: [
        "Developed a tool to manage and assign staff to support shifts, starting from gathering requirements and creating functional diagrams. The frontend was built using <span class='text-black'>Angular 18</span> with <span class='text-black'>Tailwind CSS</span> and DaisyUI, while the backend was powered by <span class='text-black'>Spring Boot with JPA and PostgreSQL</span>. Automated manual processes and improved resource planning efficiency.",
        "Handled Dockerization using <span class='text-black'>Docker Compose</span>. Ensured seamless deployment, replication, and management of services across multiple environments.",
        "Performed <span class='text-black'>E2E and integration testing</span> on critical systems using internally developed tools. Improved system stability and performance, ensuring <a href='https://youtu.be/4TYv2PhG89A?si=ac_ysiiFC-E83ivo&t=73' class='link' target='_blank' rel='noopener noreferrer'>smooth operations</a>.",
        "Provided DevOps support with <span class='text-black'>Azure DevOps</span> for a short period, assisting with releases and maintaining microservices for reliable deployment processes.",
      ],
    },
    {
      company: 'EDAG Group',
      role: 'Software Engineer Intern',
      location: 'Fulda, Hesse, Germany',
      period: 'Sept 2022 - Dec 2023',
      roleHighlights: [
        "Developed real-time data visualization dashboards with <span class='text-black'>Spring Boot</span>, <span class='text-black'>Angular</span>, and <span class='text-black'>Grafana</span>.",
        "Designed and trained an <span class='text-black'>AI-driven system</span> for monitoring and predicting data in <span class='text-black'>IoT sensor networks</span> using <span class='text-black'>LSTM neural networks</span> and <span class='text-black'>TensorFlow</span>.",
        'Created and structured multiple datasets of historical data to train the predictive AI model, optimizing the accuracy and reliability of system predictions.',
        "Configured an <span class='text-black'>IoT sensor network</span> and <span class='text-black'>IP cameras</span> using <span class='text-black'>The Things Network</span> and <span class='text-black'>Fiware platforms</span>.",
      ],
    },
  ];

  getAllExperiences(): Experience[] {
    // To prevent direct mutation
    return [...this.professionalExperience];
  }

  getLatestExperience(): Experience {
    return this.professionalExperience[0];
  }

}
