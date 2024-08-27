import { Injectable } from '@angular/core';

export interface Project {
    title: string;
    images: string[];
    videos: string[];
    date: string;
    tech: string[];
    problems: string;
    learned: string;
  }

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    private projects: Project[] = [
        {
          title: "Dean",
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
          learned: "State management with Redux, WebSocket integration, State management with Redux, WebSocket integrationState management with Redux, WebSocket integrationState management with Redux, WebSocket integrationState management with Redux, WebSocket integrationState management with Redux, WebSocket integrationState management with Redux, WebSocket integration"
        },
        {
          title: "GrateMate",
          date: "August 2021",
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
          title: "GigDigger",
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
          title: "Risto",
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
          title: "Magic Room Records",
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
            title: "Carida",
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

  constructor() { }

  getProjects() {
    return this.projects;
  }

  get2Projects() {
    return this.projects.slice(0, 2);
  }
}
