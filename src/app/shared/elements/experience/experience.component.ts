import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Experience } from '../../../core/models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {

  @Input() experience!: Experience;

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeHtml(htmlContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }
}
