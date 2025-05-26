import { Injectable } from '@angular/core';

export interface Project {
  index: string;
  title: string;
  url?: string;
  github?: string;
  images: string[];
  videos?: string[];
  date: string;
  tech: string[];
  description?: string;
  challenges?: string[];
  results?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      index: '2a',
      title: 'TickTockClock',
      url: 'https://ticktockclock.jmoreno.dev/',
      github: 'https://github.com/jesu-m0/TickTockClock',
      images: [],
      date: 'feb 2025',
      tech: ["React", "TypeScript", "Tailwind"],
      description: 'A simple, customizable timer built with React. Set intervals, get notified with sound and visual cues. No backend.',
    },
    {
      index: '2b',
      title: 'ZapCards',
      url: 'https://zapcards.jmoreno.dev/',
      github: 'https://github.com/jesu-m0/ZapCards',
      images: [],
      date: 'mar 2025',
      tech: ["Next.js", "React", "TypeScript", "Tailwind"],
      description: 'A flashcards app built with Next.js to enhance learning through active recall and spaced repetition. Review flashcards with an intuitive UI. I did it for myself, in order to study german. It is also perfect for students, language learners, and professionals.',
    },
    {
      index: '2a',
      title: 'GrateMate',
      date: 'aug 2021',
      images: [
        'assets/images/projects/gratemate/grateMate1.jpg',
        'assets/images/projects/gratemate/grateMate2.jpg',
      ],
      videos: ['https://www.youtube.com/embed/4I4q5yg17qw?si=bVwGuWmjmVJyu4wW'],
      tech: ['Flutter'],
      description:
        'This project was developed as part of a university assignment, working in a team of 3. We built a recipe app in Flutter that lets users search for recipes, save their favorites, create custom shopping lists, and follow recipe steps using voice commands. It was my first real experience with mobile development, which made it both challenging and exciting. A demo of the app in action, including the voice command feature, can be seen in the video at the end of the photo carousel.',
      challenges: [
        'Learning the Flutter ecosystem from scratch for mobile development.',
        'Implementing a smooth voice control system, using a third-party service to recognize specific commands during recipe preparation.',
        'Coordinating with the team and meeting deadlines, including regular meetings with our professor to ensure we had a functional and complete product by the end of the project.',
      ],
      results: [
        'We built a user-friendly and practical app that makes cooking smoother by letting users follow recipes without touching their device, thanks to voice commands.',
        'Personally, I gained a lot of experience in mobile development and felt comfortable working with Flutter.',
      ],
    },
    {
      index: '2b',
      title: 'Dean',
      images: [
        'assets/images/projects/dean/deanLandingPage.jpg',
        'assets/images/projects/dean/deanSearchPage.jpg',
        'assets/images/projects/dean/degreeSelection.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/4g6fgkVVt78?si=FmqW-AC696Twnj7U&amp',
      ],
      date: 'may 2021',
      tech: ['Spring Boot', 'Mustache', 'SQL'],
      description:
        "A collaborative project with a friend to create an app where students from the University of Málaga could rate and review professors and courses. We extracted the data from the official university website using a Python script for web scraping. Although we couldn't complete the project, the initial pages developed with Spring Boot and Mustache achieved a professional look.",
      challenges: [
        'Designing a frontend that was both functional and visually professional using Mustache.',
        "Performing web scraping to gather data about professors and courses from the university's website.",
        'Managing the project development despite time constraints that prevented us from finishing it.',
      ],
      results: [
        'Although the project remained incomplete, the initial work laid a solid foundation, allowing us to develop pages with a professional design and a functional backend. The early results showcased the potential of the application.',
      ],
    },
    {
      index: '2c',
      title: 'GigDigger',
      images: [
        'assets/images/projects/gigdigger/mainPage.png',
        'assets/images/projects/gigdigger/TeleoperatorChat.png',
        'assets/images/projects/gigdigger/booking.png',
        'assets/images/projects/gigdigger/profileBooking.png',
      ],
      date: 'may 2021',
      tech: ['Spring Boot', 'JSP', 'SQL'],
      description:
        'A university project focused on creating a platform for managing events, where users could create, sign up for, and get statistics on events. The system included a help chat, a grid for booking places, and user roles with different permissions. We used Spring Boot, JSP, and an SQL database to store the information.',
      challenges: [
        'Managing differentiated user roles and permissions.',
        'Implementing an event statistics system and a support chat.',
        'Adapting our work to a Scrum-style cycle with weekly meetings with the professor.',
      ],
      results: [
        'Regular meetings kept the development focused and improved team coordination.',
        'We successfully implemented all the features we set out to achieve at the start, meeting deadlines and fulfilling both our expectations and those of our professor.',
      ],
    },
    {
      index: '2d',
      title: 'Magic Room Records',
      images: [
        'assets/images/projects/magicroom/discosPage.jpg',
        'assets/images/projects/magicroom/groupPage.png',
      ],
      videos: ['https://www.youtube.com/embed/BCEpuv9zUVw?si=dkpvHQufAjUqS08u'],
      date: 'may 2021',
      tech: ['Spring Boot', 'Mustache', 'SQL'],
      description:
        'My first professional project, where I teamed up with a friend to develop a website for an up-and-coming record label. The site includes sections for news, albums, contact, and videos, as well as an admin panel that allows the client to manage their own content. We used Spring Boot for the backend, Mustache as the template engine for the frontend (Mustache is a lightweight template engine that allows embedding dynamic data into HTML easily), and implemented a secure login system for admin authentication.',
      challenges: [
        'Managing communication with the client to understand and define their needs, ensuring the product was easy to manage without constant maintenance.',
        'Designing and implementing an admin system that allowed the client to easily add and remove content.',
      ],
      results: [
        'We successfully delivered a fully functional and user-friendly website, where the client could independently manage the content. The secure login implementation ensured the admin panel was well-protected. This project gave me my first experience working with real clients, teaching me the importance of clear communication and designing systems that are easy to maintain.',
      ],
    },
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }

  get2Projects() {
    return this.projects.slice(0, 2);
  }
}
