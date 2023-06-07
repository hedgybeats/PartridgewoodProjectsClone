import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showFooter: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {

  }

  public HomeReload(): void {
    const currentUrl = this.router.url.substring(1).split('/');
    if (currentUrl[0].toLowerCase() === 'home') {
      window.location.reload();
    }
    this.router.navigate(['home']);
  }
}
