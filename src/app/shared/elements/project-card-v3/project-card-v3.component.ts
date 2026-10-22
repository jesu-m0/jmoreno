import { Component, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { SubsectionComponent } from "../subsection/subsection.component";
import { RedirectButtonComponent } from "../redirect-button/redirect-button.component";
import { Project } from '../../../core/models/project.model';

import { PhotoVideoCarouselComponent } from "../photo-video-carousel/photo-video-carousel.component";

@Component({
  selector: 'app-project-card-v3',
  imports: [
    SubsectionComponent,
    RedirectButtonComponent,
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

  /** Description split into paragraphs, each into plain/bold runs. */
  paragraphs: { text: string; bold: boolean }[][] = [];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.paragraphs = (this.project.description ?? '')
      .split(/\n\s*\n/)
      .map((p) =>
        p
          .split('**')
          .map((text, i) => ({ text, bold: i % 2 === 1 }))
          .filter((run) => run.text)
      );
  }

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
