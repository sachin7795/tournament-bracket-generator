import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(private route: Router) {}

    logout() {
      localStorage.removeItem('isLoggedIn');
      this.route.navigateByUrl('/login');
    }

}
