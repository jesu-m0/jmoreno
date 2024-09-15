import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  images: string[];
  videos: string[];
  date: string;
  tech: string[];
  description?: string;
  problems?: string;
  learned?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      title: "GrateMate",
      date: "August 2021",
      images: [
        "assets/images/projects-images/gratemate/grateMate1.jpg",
        "assets/images/projects-images/gratemate/grateMate2.jpg"
      ],
      videos: [
        "https://www.youtube.com/embed/4I4q5yg17qw?si=bVwGuWmjmVJyu4wW"
      ],
      tech: ["Flutter"],
      problems: "Handling API rate limits Caching strategies, error handling in API calls...",
      learned: "Caching strategies, error handling in API calls"
    },
    {
      title: "Dean",
      images: [
        "assets/images/projects-images/dean/deanLandingPage.jpg",
        "assets/images/projects-images/dean/deanSearchPage.jpg",
        "assets/images/projects-images/dean/degreeSelection.jpg"
      ],
      videos: [
        "https://www.youtube.com/embed/4g6fgkVVt78?si=FmqW-AC696Twnj7U&amp"
      ],
      date: "May 2021",
      tech: ["Spring Boot", "HTML", "CSS"],
      problems: "Implementing real-time inventory updates",
      learned: "State management with Redux, WebSocket integration, State management with Redux, WebSocket integrationState management with Redux, WebSocket integrationState management with Redux, WebSocket integrationState management with Redux, WebSocket integrationState management with Redux, WebSocket integrationState management with Redux, WebSocket integration"
    },
    {
      title: "GigDigger",
      images: [
        "assets/images/projects-images/gigdigger/mainPage.png",
        "assets/images/projects-images/gigdigger/TeleoperatorChat.png",
        "assets/images/projects-images/gigdigger/booking.png",
        "assets/images/projects-images/gigdigger/profileBooking.png",
      ],
      videos: [
      ],
      date: "May 2021",
      tech: ["React", "Node.js", "MongoDB"],
      problems: "Implementing real-time inventory updates...",
      learned: "State management with Redux, WebSocket integration"
    },
    {
      title: "Magic Room Records",
      images: [
        "assets/images/projects-images/magicroom/discosPage.jpg",
        "assets/images/projects-images/magicroom/groupPage.png"
      ],
      videos: [
        "https://www.youtube.com/embed/BCEpuv9zUVw?si=dkpvHQufAjUqS08u"
      ],
      date: "May 2021",
      tech: ["Spring boot", "HTML", "CSS"],
      problems: "Implementing real-time inventory updates",
      learned: "State management with Redux, WebSocket integration"
    }
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  get2Projects() {
    return this.projects.slice(0, 2);
  }
}
