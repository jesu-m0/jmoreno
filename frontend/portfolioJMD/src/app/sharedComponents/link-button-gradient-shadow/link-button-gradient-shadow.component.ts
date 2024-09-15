import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button-gradient-shadow',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './link-button-gradient-shadow.component.html',
  styleUrl: './link-button-gradient-shadow.component.css'
})
export class LinkButtonGradientShadowComponent {
  @Input() text:String
  @Input() href:String

}
