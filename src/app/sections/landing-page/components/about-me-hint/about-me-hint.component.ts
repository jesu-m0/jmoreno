import { Component } from '@angular/core';
import { RedirectButtonComponent } from '../../../../shared/elements/redirect-button/redirect-button.component';
import { TitleComponent } from '../../../../shared/elements/title/title.component';

@Component({
  selector: 'app-about-me-hint',
  imports: [
    RedirectButtonComponent,
    TitleComponent
  ],
  templateUrl: './about-me-hint.component.html',
  styleUrl: './about-me-hint.component.css'
})
export class AboutMeHintComponent {

}
