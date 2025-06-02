import { Component, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { SubsectionComponent } from "../subsection/subsection.component";
import { RedirectButtonComponent } from "../redirect-button/redirect-button.component";
import { Project } from '../../../core/models/project.model';
import { CommonModule } from '@angular/common';
import { PhotoVideoCarouselComponent } from "../photo-video-carousel/photo-video-carousel.component";

@Component({
  selector: 'app-project-card-v3',
  imports: [
    SubsectionComponent,
    RedirectButtonComponent,
    CommonModule,
    PhotoVideoCarouselComponent
],
  templateUrl: './project-card-v3.component.html',
  styleUrl: './project-card-v3.component.css',
})
export class ProjectCardV3Component {
  @Input() project!:Project;
  @Input() index!:string;

  @ViewChild('carouselAnchor', { static: true })
  carouselAnchor!: ElementRef<HTMLDivElement>;

  showCarousel = false;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    // If IntersectionObserver isn't supported, show the carousel immediately
    if (!('IntersectionObserver' in window)) {
      this.showCarousel = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          // Run inside Angular zone to trigger change detection
          this.ngZone.run(() => {
            this.showCarousel = true;
          });
          obs.disconnect();
        }
      },
      { rootMargin: '200px' } // trigger 200px before element enters viewport
    );

    observer.observe(this.carouselAnchor.nativeElement);
  }
}
