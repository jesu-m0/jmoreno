
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.css'
})
export class EducationCardComponent {

  @Input() university!:string;
  @Input() degree!:string;
  @Input() period!:string;
  @Input() thesis?:string;

}
