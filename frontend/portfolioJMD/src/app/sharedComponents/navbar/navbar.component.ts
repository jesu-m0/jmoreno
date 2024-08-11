import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChildren('underline') underlines!: QueryList<ElementRef>;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.updateUnderline(this.router.url);
  }

  ul(index: number, path: string) {
    this.moveUnderline(index);

    setTimeout(() => {
      console.log(path);
      
      this.router.navigate([path]);
    }, 500); // 500 ms retard
  }

  moveUnderline(index: number) {
    this.underlines.forEach((underline, i) => {
      underline.nativeElement.style.transform = `translate3d(${index * 100}%, 0, 0)`;
    });
  }

  updateUnderline(url: string) {
    const routes = ['/home', '/projects', '/career', '/about'];
    const index = routes.indexOf(url);
    if (index !== -1) {
      this.moveUnderline(index);
    } else {
      this.moveUnderline(0); //when the url is different to all others, stay in the first option
    }
  }
}
