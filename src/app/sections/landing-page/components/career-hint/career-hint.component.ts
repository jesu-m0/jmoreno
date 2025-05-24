import { Component } from '@angular/core';
import { RedirectButtonComponent } from "../../../../shared/elements/redirect-button/redirect-button.component";
import { TitleComponent } from "../../../../shared/elements/title/title.component";
import { SubsectionComponent } from '../../../../shared/elements/subsection/subsection.component';

@Component({
  selector: 'app-career-hint',
  imports: [
    RedirectButtonComponent,
    TitleComponent,
    SubsectionComponent
],
  templateUrl: './career-hint.component.html',
  styleUrl: './career-hint.component.css'
})
export class CareerHintComponent {

}
