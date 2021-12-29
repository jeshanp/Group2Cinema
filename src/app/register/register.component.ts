import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: any = {};
  userSubmitted: boolean;

  //Check if passwords match
  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('cpassword').value;
    return pass === confirmPass
      ? null
      : {
          notSame: true,
        };
  };

  constructor() {}

  ngOnInit() {
    this.registrationForm = new FormGroup(
      {
        fname: new FormControl(null, Validators.required),
        sname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        cpassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      this.checkPasswords
    );
  }

  onSubmit() {
    console.log(this.registrationForm);
    console.log(this.findInvalidControls());
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      this.user = Object.assign(this.user, this.registrationForm.value);
      this.addUser(this.user);
      this.userSubmitted = false;
    }
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.registrationForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  addUser(user: any) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
