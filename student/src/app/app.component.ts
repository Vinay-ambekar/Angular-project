import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'header';
  sideNavStatus:boolean=false;
  appear:boolean=false;
  showLogin: boolean = true;
  handleButtonClick(): void {
    this.appear = true;
    this.showLogin = false;
  }
}
