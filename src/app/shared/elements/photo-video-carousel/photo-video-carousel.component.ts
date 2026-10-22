import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  CarouselItem,
  PhotoDimension,
  PhotoItem,
  VideoFileItem,
  VideoItem,
} from '../../../core/models/media-item.model';
import { MediaLightboxComponent } from '../media-lightbox/media-lightbox.component';

@Component({
  selector: 'app-photo-video-carousel',
  imports: [CommonModule, NgOptimizedImage, MediaLightboxComponent],
  templateUrl: './photo-video-carousel.component.html',
  styleUrl: './photo-video-carousel.component.css',
})
export class PhotoVideoCarouselComponent {
  @Input({ required: true }) photos!: string[];
  photoData: PhotoDimension[] = []; // will measured photos

  @Input() videos?: string[];
  safeVideos: SafeResourceUrl[] = []; // will store sanitazed link for videos
  videoFiles: string[] = []; // self-hosted videos, played with <video>

  /** Opt-in: click a slide to open it full-screen. Off keeps the previous behaviour. */
  @Input() enableLightbox = false;
  lightboxOpen = false;

  currentIndex = 0;

  @ViewChildren('carouselVideo')
  carouselVideos!: QueryList<ElementRef<HTMLVideoElement>>;

  /** Rebuilt only when the source media changes, so the reference stays stable. */
  items: CarouselItem[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadAllDimensions(this.photos)
      .then((all) => {
        this.photoData = all;
        this.rebuildItems();
      })
      .catch((err) => {
        console.error('Error measuring images:', err);
      });

    const videos = this.videos || [];
    this.videoFiles = videos.filter((v) => this.isVideoFile(v));
    this.safeVideos = videos
      .filter((v) => !this.isVideoFile(v))
      .map((video) => this.sanitizer.bypassSecurityTrustResourceUrl(video));
    this.rebuildItems();
  }

  private isVideoFile(url: string): boolean {
    return /\.(mp4|webm)$/i.test(url);
  }

  private loadAllDimensions(urls: string[]): Promise<PhotoDimension[]> {
    const promises: Promise<PhotoDimension>[] = urls.map((u) =>
      this.loadOneDimension(u)
    );
    return Promise.all(promises);
  }

  private loadOneDimension(url: string): Promise<PhotoDimension> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;

      // If it was cached and complete already, resolve immediately:
      if (img.complete) {
        resolve({
          src: url,
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
        return;
      }

      img.onload = () => {
        resolve({
          src: url,
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
      img.onerror = (err) => {
        reject(`Failed to load image ${url}: ${err}`);
      };
    });
  }

  private rebuildItems(): void {
    // Map each photoData[] entry into a PhotoItem
    const photoItems: PhotoItem[] = this.photoData.map((p) => ({
      type: 'photo',
      photo: p,
    }));

    // Map each safeVideos[] entry into a VideoItem
    const videoItems: VideoItem[] = this.safeVideos.map((sv) => ({
      type: 'video',
      video: sv,
    }));

    // Self-hosted videos are showcase reels, so they lead; embeds keep trailing.
    const videoFileItems: VideoFileItem[] = this.videoFiles.map((src) => ({
      type: 'videoFile',
      src,
    }));

    this.items = [...videoFileItems, ...photoItems, ...videoItems];
  }

  openLightbox(): void {
    if (!this.enableLightbox || this.items.length === 0) return;
    this.lightboxOpen = true;
    this.syncVideos();
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.syncVideos();
  }

  /**
   * Only the visible slide plays, and nothing plays behind the lightbox (which
   * runs its own copy). A video that becomes visible again resumes from the
   * shared position, so going full screen and back never restarts it.
   */
  syncVideos(): void {
    this.carouselVideos?.forEach(({ nativeElement: video }) => {
      const slide = Number(video.dataset['slide']);
      const item = this.items[slide];
      if (slide === this.currentIndex && !this.lightboxOpen) {
        if (item?.type === 'videoFile' && item.time !== undefined && Math.abs(video.currentTime - item.time) > 0.5) {
          video.currentTime = item.time;
        }
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.syncVideos();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.syncVideos();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.syncVideos();
  }

  trackByIndex(index: number, item: unknown): number {
    return index;
  }
}
