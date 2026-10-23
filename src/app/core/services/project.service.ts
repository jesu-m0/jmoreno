import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectIndex: number = 2; //index used in the portfolio "2a", "2b", "2c"...
  private projects: Project[] = [
    {
      title: 'Kage',
      images: [
        'assets/images/projects/kage/home-mobile.jpg',
        'assets/images/projects/kage/channel-sources-mobile.jpg',
        'assets/images/projects/kage/tv-home.jpg',
        'assets/images/projects/kage/tv-player.jpg',
        'assets/images/projects/kage/phone-as-remote.jpg',
      ],
      videos: ['assets/videos/kage-showcase.mp4'],
      date: 'jun 2026',
      tech: ['Next.js', 'Node.js', 'Docker', 'Android TV'],
      description:
        "The idea was simple: take an IPTV or Acestream link and **watch it from anywhere**. That's how Kage was born.\n\n" +
        "You can create channels, each with **several sources**, and if one fails it tries the next one on its own. You can also just paste a link and it plays: Kage figures out what it is, so nobody needs to know what an m3u8 is.\n\n" +
        "There's a TV app too, and you can pair your phone with it and **use it as the remote**. One button routes the whole app through a VPN, in the country you choose. Away from home it works the same: the server at home converts the stream to HLS and serves it through a Cloudflare tunnel, with Next.js on the front.",
      disclaimer:
        "Disclaimer: Kage is a private, personal project. It doesn't host or distribute any content; it only plays links that users provide themselves, and each user is responsible for what they watch.",
    },
    {
      title: 'UrbanFighter',
      url: 'https://urban-fighter.app/',
      images: [
        'assets/images/projects/urbanfighter/desktop-home.jpg',
        'assets/images/projects/urbanfighter/desktop-stats.jpg',
        'assets/images/projects/urbanfighter/desktop-quiz-dark.jpg',
        'assets/images/projects/urbanfighter/desktop-map-quiz.jpg',
        'assets/images/projects/urbanfighter/mobile-quiz.jpg',
        'assets/images/projects/urbanfighter/mobile-stats.jpg',
      ],
      videos: ['assets/videos/urbanfighter-showcase.mp4'],
      date: 'mar 2026',
      tech: ['React', 'TypeScript', 'Leaflet', 'Supabase'],
      description:
        "An app to prepare the street-map exam for public service entrance tests: **learn the streets by playing on the real map**. It starts with Málaga, for the firefighter entrance exam and the taxi licence test, but it's built to add more cities.\n\n" +
        "It has three modes: we give you a spot and you pick the street, we give you the street and you pin it on the map, or you find landmarks, hospitals and key places. It uses each city council's official data, works on desktop or mobile and needs no sign-up. With an account, it keeps your progress, your streak and the streets you keep missing.\n\n" +
        "It's **in beta** and free for now. Built with React, TypeScript and Leaflet, with Supabase for accounts, progress and stats.",
    },
    {
      title: 'Jaque',
      images: [
        'assets/images/projects/jaque/broadcast.jpg',
        'assets/images/projects/jaque/blunder.jpg',
        'assets/images/projects/jaque/review.jpg',
        'assets/images/projects/jaque/threats.jpg',
        'assets/images/projects/jaque/train.jpg',
        'assets/images/projects/jaque/insights.jpg',
      ],
      videos: ['assets/videos/jaque-showcase.mp4'],
      date: 'jul 2026',
      tech: ['Next.js', 'Node.js', 'Stockfish', 'Docker'],
      description:
        "I like to play chess now and then, and chess.com's game review is paid. So I built my own.\n\n" +
        "Jaque syncs my games through chess.com's public API and analyses them with **Stockfish on my own server**. When I make a mistake, it checks what I let my opponent do: take a piece for free, attack two pieces at once or checkmate me. From that it writes an explanation in plain words, **no AI**. Then my mistakes come back as exercises, filterable by type.\n\n" +
        'Frontend in Next.js; backend in Node with Stockfish, in Docker on my server, behind a Cloudflare tunnel.',
    },
    {
      title: 'TikWords',
      url: 'https://tikwords.jmoreno.dev/',
      images: [
        'assets/images/projects/tikwords/mobile-home.jpg',
        'assets/images/projects/tikwords/mobile-card-front.jpg',
        'assets/images/projects/tikwords/mobile-card-back.jpg',
        'assets/images/projects/tikwords/mobile-decks.jpg',
        'assets/images/projects/tikwords/desktop-home.jpg',
      ],
      videos: ['assets/videos/tikwords-showcase.mp4'],
      date: 'sep 2026',
      tech: ['Next.js', 'React', 'PWA', 'Redis'],
      description:
        'I wanted to learn German as easily as I scroll, but the flashcard apps I tried felt like homework.\n\n' +
        'TikWords has vocabulary decks in several languages: **you flip the card and swipe it**. It takes care of the details: der, die, das in colour with the plural next to it, or irregular verbs with all their forms.\n\n' +
        "You don't need an account or an email, but you can **sync across devices** with a QR or a code.\n\n" +
        "It's a PWA in Next.js that installs like an app. Your progress lives on the device, and sync stores it under that code in Redis (Upstash). Spaced repetition is FSRS.",
    },
    {
      title: 'DeltaHunter',
      url: 'https://delta-hunter.jmoreno.dev/',
      github: 'https://github.com/jesu-m0/DeltaHunter',
      images: [
        'assets/images/projects/deltahunter/dashboard-overview.png',
        'assets/images/projects/deltahunter/sector-detail.png',
        'assets/images/projects/deltahunter/telemetry-card.png',
        'assets/images/projects/deltahunter/telemetry-charts.png',
        'assets/images/projects/deltahunter/key-findings.png',
        'assets/images/projects/deltahunter/playback-mobile.jpg',
        'assets/images/projects/deltahunter/circuit-map-mobile.jpg',
        'assets/images/projects/deltahunter/sector-detail-mobile.jpg',
        'assets/images/projects/deltahunter/telemetry-card-mobile.jpg',
        'assets/images/projects/deltahunter/charts-mobile.jpg',
      ],
      videos: ['assets/videos/deltahunter-showcase.mp4'],
      date: 'mar 2026',
      tech: ['Next.js', 'TypeScript', 'Python', 'Tailwind'],
      description:
        "A telemetry comparison tool for Assetto Corsa. Upload two MoTeC .ld files. A Python serverless backend handles the parsing and comparison. Speed, time delta, gear, RPM with upshift markers, throttle, brake and trail braking, plus a GPS circuit map with per-sector deltas and a zoomed racing-line view for each corner. It also turns the numbers into coaching tips, and replays the lap along the track at adjustable speed. The demo data compares me against Cavalli, an actual pro driver. Those 5.7 seconds he has on me are exactly why this tool exists."
    },
    {
      title: 'Pinpoint',
      github: 'https://github.com/jesu-m0/ac-pinpoint',
      images: [
        'assets/images/projects/ac-pinpoint/tosa-1st-cam.jpg',
        'assets/images/projects/ac-pinpoint/villeneuve-3rd-cam.jpg',
        'assets/images/projects/ac-pinpoint/mod-tab-1st-view.jpg',
      ],
      date: 'feb 2026',
      tech: ['Lua', 'CSP', 'Assetto Corsa'],
      description:
        'A mod for Assetto Corsa that lets you place custom braking reference markers anywhere on track with a single key press. Sometimes is dificult to find a visual reference... Built in Lua on top of Custom Shaders Patch.',
    },
    {
      title: 'TickTockClock',
      url: 'https://ticktockclock.jmoreno.dev/',
      github: 'https://github.com/jesu-m0/TickTockClock',
      images: [
        'assets/images/projects/ticktockclock/mainpage-mobile-dark.jpg',
        'assets/images/projects/ticktockclock/mainpage-mobile-light.jpg',
        'assets/images/projects/ticktockclock/mainpage-desktop-dark.jpg',
        'assets/images/projects/ticktockclock/intervals-mobile-dark.jpg',
        'assets/images/projects/ticktockclock/expanded-mobile-dark.jpg',
      ],
      date: 'feb 2025',
      tech: ['React', 'TypeScript', 'Tailwind'],
      description:
        'A minimal, responsive timer web app designed for workouts and task tracking. Built with React and Tailwind CSS, it offers customizable intervals and a clean interface — all without requiring installation. Created out of frustration with cluttered, hard-to-use online timers that often require installation, and as a way to practice with React and bento grid layouts.',
    },
    {
      title: 'ZapCards',
      url: 'https://zapcards.jmoreno.dev/',
      github: 'https://github.com/jesu-m0/ZapCards',
      images: [
        'assets/images/projects/zapcards/cardexample-mobile.PNG',
        'assets/images/projects/zapcards/cardbackexample-mobile.PNG',
        'assets/images/projects/zapcards/frontsidelanguaje-mobile.PNG',
        'assets/images/projects/zapcards/topics-mobile.PNG',
      ],
      date: 'mar 2025',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      description:
        'A flashcards app built with Next.js to enhance learning through active recall and spaced repetition. Review flashcards in multiple languages (English, German, Spanish, Italian, French, Portuguese) with an intuitive UI. Created for personal use to study German, this app is perfect for students, language learners, and professionals looking to improve their language skills or memorize information efficiently.',
    },
    {
      title: 'GrateMate',
      github: 'https://github.com/jesu-m0/GrateMate',
      date: 'mar 2023',
      images: [
        'assets/images/projects/gratemate/mainpage.jpg',
        'assets/images/projects/gratemate/recipe.jpg',
        'assets/images/projects/gratemate/recipeSteps.jpg',
        'assets/images/projects/gratemate/shoppingList.jpg',
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
      title: 'Magic Room Records',
      images: [
        'assets/images/projects/mrr/discosPage.jpg',
        'assets/images/projects/mrr/groupPage.png',
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

  getProjects(): Project[] {
    return this.projects.map((project) => {
      return {
        ...project,
        index: this.projectIndex + this.getIndex(project),
      };
    });
  }

  get2Projects(): Project[] {
    return this.projects.slice(0, 2).map((project) => ({
      ...project,
      index: this.projectIndex + this.getIndex(project),
    }));
  }

  getIndex(project: Project): string {
    // find the numeric index
    const idx = this.projects.indexOf(project);
    if (idx === -1) {
      throw new Error('Project not found');
    }

    // compute the letter: 'a' + idx
    const code = 'a'.charCodeAt(0) + idx;
    const maxCode = 'z'.charCodeAt(0);
    if (code > maxCode) {
      throw new Error('Ran out of letters!');
    }

    return String.fromCharCode(code);
  }
}
