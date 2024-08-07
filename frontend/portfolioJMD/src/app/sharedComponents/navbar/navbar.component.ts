import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChildren('underline') underlines!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Puedes usar `this.underlines` para acceder a los elementos después de que se haya inicializado la vista
  }
  
  ul(index: number) {
    console.log('click!' + index);
  
    this.underlines.forEach((underline, i) => {
      underline.nativeElement.style.transform = `translate3d(${index * 100}%, 0, 0)`;
    });
  }
}
