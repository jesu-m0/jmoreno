import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() name!: string;
  @Input() size: string = 'w-6 h-6';


  get iconUrl(){
    return `assets/icons/${this.name}.svg`;
  }

}
