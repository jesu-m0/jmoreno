import { Component } from '@angular/core';
import { TitleComponent } from "../../shared/elements/title/title.component";
import { RouterLink } from '@angular/router';
import { SubsectionComponent } from "../../shared/elements/subsection/subsection.component";

@Component({
  selector: 'app-about-me',
  imports: [
    TitleComponent,
    RouterLink,
    SubsectionComponent
],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
