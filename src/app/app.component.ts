import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test = 'test';
}
