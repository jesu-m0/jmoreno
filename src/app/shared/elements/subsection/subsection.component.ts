import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subsection',
  imports: [],
  templateUrl: './subsection.component.html',
  styleUrl: './subsection.component.css'
})
export class SubsectionComponent {
  @Input() index!:string;
  @Input() subsectionTitle!:string;
}
