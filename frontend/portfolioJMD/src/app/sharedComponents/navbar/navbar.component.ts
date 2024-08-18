import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('underline') underlines!: QueryList<ElementRef>;
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.updateUnderline(this.router.url);

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateUnderline(event.urlAfterRedirects);
      }
    });
  }

  ul(index: number, path: string) {
    this.moveUnderline(index);

    setTimeout(() => {
      console.log(path);
      
      this.router.navigate([path]);
    }, 500);
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
      this.moveUnderline(0);
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
