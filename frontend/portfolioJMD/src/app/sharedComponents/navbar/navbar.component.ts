import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
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
  }

  moveUnderline(index: number) {
    this.underlines.forEach((underline, i) => {
      underline.nativeElement.style.transform = `translate3d(${index * 100}%, 0, 0)`;
    });
  }

  updateUnderline(url: string) {
    const cleanUrl = url.split('#')[0]; // We dont care what is after #
    const routes = ['/home', '/projects', '/career', '/about'];
    const index = routes.indexOf(cleanUrl);
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
