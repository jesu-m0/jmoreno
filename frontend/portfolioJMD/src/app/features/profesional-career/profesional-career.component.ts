import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profesional-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesional-career.component.html',
  styleUrl: './profesional-career.component.css'
})
export class ProfesionalCareerComponent {
  experiences = [
    {
      period: "dic. 2023 - Actual",
      company: "EDAG Group",
      title: "Software Engineer",
      location: "Fulda, Hesse, Germany",
      achievements: [
      ]
    },
    {
      "period": "Sept. 2022 - Dec. 2023",
      "company": "EDAG Group",
      "title": "Software Engineer Intern",
      "achievements": [
        "Developed and configured an IoT sensor network and IP cameras using The Things Network and Fiware platforms.",
        "Created Web Dashboards with Spring Boot and Angular for real-time data visualization.",
        "Developed a system for monitoring and predicting data in IoT sensor networks using artificial intelligence techniques.",
        "Integrated historical data analysis and prediction generation using LSTM neural networks and TensorFlow.",
        "Built a web application with Spring Boot and Angular for real-time visualization and alert management, providing an intuitive and accessible interface."
      ],
      "location": "Fulda, Hesse, Germany"
    }
    
  ];
}
