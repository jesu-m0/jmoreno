import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../../config/project.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() projects : Project[] = [];
  
  constructor(private sanitizer: DomSanitizer) {}


  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  scrollNext(event: Event) {
    const scrollContainer = (event.target as HTMLElement).closest('.relative')?.querySelector('.flex') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: scrollContainer.offsetWidth, behavior: 'smooth' });
    }
  }

  scrollPrev(event: Event) {
    const scrollContainer = (event.target as HTMLElement).closest('.relative')?.querySelector('.flex') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -scrollContainer.offsetWidth, behavior: 'smooth' });
    }
  }
}
