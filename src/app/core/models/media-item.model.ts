import { SafeResourceUrl } from '@angular/platform-browser';

export interface PhotoDimension {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export interface PhotoItem {
  type: 'photo';
  photo: PhotoDimension;
}

export interface VideoItem {
  type: 'video';
  video: SafeResourceUrl;
}

/** A self-hosted video file (e.g. an .mp4 under assets/), played natively. */
export interface VideoFileItem {
  type: 'videoFile';
  src: string;
}

export type CarouselItem = PhotoItem | VideoItem | VideoFileItem;
