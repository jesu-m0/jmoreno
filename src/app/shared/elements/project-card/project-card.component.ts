import { Component } from '@angular/core';
import { SubsectionComponent } from '../subsection/subsection.component';

@Component({
  selector: 'app-project-card',
  imports: [
    SubsectionComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  project = {
      title: "GrateMate",
      index: "3a",
      date: "August 2021",
      images: [
        "assets/images/projects/gratemate/grateMate1.jpg",
        "assets/images/projects/gratemate/grateMate2.jpg"
      ],
      videos: [
        "https://www.youtube.com/embed/4I4q5yg17qw?si=bVwGuWmjmVJyu4wW"
      ],
      tech: ["Flutter"],
      
      description: "This project was developed as part of a university assignment, working in a team of 3. We built a recipe app in Flutter that lets users search for recipes, save their favorites, create custom shopping lists, and follow recipe steps using voice commands. It was my first real experience with mobile development, which made it both challenging and exciting. A demo of the app in action, including the voice command feature, can be seen in the video at the end of the photo carousel.",
      challenges: ["Learning the Flutter ecosystem from scratch for mobile development.", "Implementing a smooth voice control system, using a third-party service to recognize specific commands during recipe preparation.", "Coordinating with the team and meeting deadlines, including regular meetings with our professor to ensure we had a functional and complete product by the end of the project."],
      results: ["We built a user-friendly and practical app that makes cooking smoother by letting users follow recipes without touching their device, thanks to voice commands.","Personally, I gained a lot of experience in mobile development and felt comfortable working with Flutter."]
    }
}
