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
      title: "Dean 1",
      images: [
        "assets/moreno-halfcolored.jpg",
        "assets/images/screenshot-example.png",
        "assets/images/screenshot-example.png"
      ],
      videos: [
        "https://www.youtube.com/embed/4g6fgkVVt78?si=FmqW-AC696Twnj7U&amp"
      ],
      date: "May 2021",
      tech: ["React", "Node.js", "MongoDB"],
      problems: "Implementing real-time inventory updates",
      learned: "State management with Redux, WebSocket integration"
    },
    {
      title: "Weather App 2",
      images: [
        "assets/moreno-halfcolored.jpg",
        "assets/images/screenshot-example.png",
        "assets/images/screenshot-example.png"
      ],
      videos: [
        "https://www.youtube.com/embed/4g6fgkVVt78?si=FmqW-AC696Twnj7U&amp"
      ],
      tech: ["Vue.js", "Express", "OpenWeatherMap API"],
      problems: "Handling API rate limits Caching strategies, error handling in API calls...",
      learned: "Caching strategies, error handling in API calls"
    },
    {
      title: "Dean 3",
      images: [
        "assets/moreno-halfcolored.jpg",
        "assets/images/screenshot-example.png",
        "assets/images/screenshot-example.png"
      ],
      videos: [
        "https://www.youtube.com/embed/4g6fgkVVt78?si=FmqW-AC696Twnj7U&amp"
      ],
      date: "May 2021",
      tech: ["React", "Node.js", "MongoDB"],
      problems: "Implementing real-time inventory updates...",
      learned: "State management with Redux, WebSocket integration"
    },
    {
      title: "Dean 4",
      images: [
        "assets/moreno-halfcolored.jpg",
        "assets/images/screenshot-example.png",
        "assets/images/screenshot-example.png"
      ],
      videos: [
        "https://www.youtube.com/embed/4g6fgkVVt78?si=FmqW-AC696Twnj7U&amp"
      ],
      date: "May 2021",
      tech: ["React", "Node.js", "MongoDB"],
      problems: "Implementing real-time inventory updates",
      learned: "State management with Redux, WebSocket integration"
    },
    {
      title: "Dean 5",
      images: [
        "assets/moreno-halfcolored.jpg",
        "assets/images/screenshot-example.png",
        "assets/images/screenshot-example.png"
      ],
      videos: [
        "https://www.youtube.com/embed/4g6fgkVVt78?si=FmqW-AC696Twnj7U&amp"
      ],
      date: "May 2021",
      tech: ["React", "Node.js", "MongoDB"],
      problems: "Implementing real-time inventory updates",
      learned: "State management with Redux, WebSocket integration"
    },
    {
      title: "Dean 6",
      images: [
        "assets/moreno-halfcolored.jpg",
        "assets/images/screenshot-example.png",
        "assets/images/screenshot-example.png"
      ],
      videos: [
        "https://www.youtube.com/embed/4g6fgkVVt78?si=FmqW-AC696Twnj7U&amp"
      ],
      date: "May 2021",
      tech: ["React", "Node.js", "MongoDB"],
      problems: "Implementing real-time inventory updates",
      learned: "State management with Redux, WebSocket integration"
    }
  ];
  

}
