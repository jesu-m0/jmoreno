import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redirect-button',
  imports: [
    IconComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './redirect-button.component.html',
  styleUrl: './redirect-button.component.css'
})
export class RedirectButtonComponent {
    @Input() icon?: string;
    @Input() label!: string;
    @Input() href!: string;
    @Input() size: string = "w-6 h-6";

}
