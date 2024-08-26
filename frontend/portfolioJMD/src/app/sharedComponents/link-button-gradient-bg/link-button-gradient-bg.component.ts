import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button-gradient-bg',
  standalone: true,
  imports: [],
  templateUrl: './link-button-gradient-bg.component.html',
  styleUrl: './link-button-gradient-bg.component.css'
})
export class LinkButtonGradientBgComponent {

  @Input() text:String
  @Input() href:String

}
