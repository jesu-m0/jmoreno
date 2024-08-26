import { Component } from '@angular/core';
import { ProjectsTimelineComponent } from './components/projects-timeline/projects-timeline.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsTimelineComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: "Risto",
      images: [
        "assets/moreno-halfcolored.jpg",
        "assets/images/screenshot-example.png",
        "assets/images/screenshot-example.png"
      ],
      videos: [
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/jNQXAC9IVRw"
      ],
      tech: "React, Node.js, MongoDB",
      problems: "Implementing real-time inventory updates",
      learned: "State management with Redux, WebSocket integration"
    },
    {
      title: "Weather App",
      images: [
        "assets/moreno-halfcolored.jpg",
        "assets/images/screenshot-example.png",
        "assets/images/screenshot-example.png"
      ],
      videos: [
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/jNQXAC9IVRw"
      ],
      tech: "Vue.js, Express, OpenWeatherMap API",
      problems: "Handling API rate limits",
      learned: "Caching strategies, error handling in API calls"
    }
  ];

}
