import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showFooter: boolean = false;
  showFloatingImage: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // replace 'page' with the route where you don't want to show the image
      this.showFloatingImage = !event.url.includes('/contact');
    });
  }

  public homeReload(): void {
    const currentUrl = this.router.url.substring(1).split('/');
    if (currentUrl[0].toLowerCase() === 'home') {
      window.location.reload();
    }
    this.router.navigate(['home']);
  }
}
