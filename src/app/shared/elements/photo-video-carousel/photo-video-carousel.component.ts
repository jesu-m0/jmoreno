import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-video-carousel',
  imports: [CommonModule],
  templateUrl: './photo-video-carousel.component.html',
  styleUrl: './photo-video-carousel.component.css',
})
export class PhotoVideoCarouselComponent {
  @Input({ required: true }) photos!: string[];
  @Input() videos?: string[];

  safeVideos : SafeResourceUrl[] = [];

  currentIndex = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeVideos = (this.videos || []).map(video =>
      this.sanitizer.bypassSecurityTrustResourceUrl(video)
    );
  }

  get items(): (string | SafeResourceUrl)[] {
    return [...this.photos, ...this.safeVideos];
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
