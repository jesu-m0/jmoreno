import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-link-button-component',
    imports: [],
    templateUrl: './link-button-component.component.html',
    styleUrl: './link-button-component.component.css'
})
export class LinkButtonComponentComponent {

  @Input() text:String
  @Input() href:String


}
