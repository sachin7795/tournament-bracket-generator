import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    user: User = new User();
    showError: boolean = false;
    errorMsg: string = "Please fill required fields";

    constructor(private loginService: LoginService,
      private _snackBar: MatSnackBar,
      private _route: Router) {}

    ngOnInit() {
      if(localStorage.getItem('isLoggedIn')=='true') {
        this._route.navigateByUrl('/seasons');
      }
    }

    login() {
      this.showError = false;
      if(this.user.username && this.user.username.trim()!='' && this.user.password && this.user.password.trim()!='') {
        this.loginService.login(this.user).subscribe(
          (success) => {
            localStorage.setItem('isLoggedIn', 'true');
            this._route.navigateByUrl('/seasons');
          },
          (err) => {
            console.log(err);
            this._snackBar.open('Invalid credentials', 'Close', {
              duration: 3000,
            });
          }
        )
      } else {
        this.showError = true;
      }
    }

}
