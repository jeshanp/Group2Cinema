import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegistrationService } from '../services/registration.service';
import { User } from '../services/user';
import { loggedInStatus } from '../loginstatus';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = ' ';
  isLoggedIn = loggedInStatus.loggedIn;
  constructor(private _service: RegistrationService, private _route: Router) {}

  loginUser() {
    this._service.loginUserFronRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        this._route.navigate(['/dashboard']);
        loggedInStatus.loggedIn = true;
      },
      (error) => {
        console.log('invalid login credential');
        this.msg = 'Bad credentials enter valid email id and password';
      }
    );
  }
  ngOnInit(): void {}
  // gotoregistration()
  // {
  //   this._route.navigate(['/registration'])
  // }

  // onLogin(loginForm: NgForm) {
  //   console.log(loginForm.value);
  //   const token = this.authService.authUser(loginForm.value);
  //   if (token) {
  //     localStorage.setItem('token', token.userName);
  //     console.log('Login Success');
  //   } else {
  //     console.log('Login Failed');
  //   }
  // }
}
