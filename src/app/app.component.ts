import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}

  isLoggedIn() {
    if(localStorage.getItem('isLoggedIn')=='true') return true;
    else return false;
  }
}
