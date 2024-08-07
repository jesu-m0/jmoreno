import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharedComponents/navbar/navbar.component';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  

}
