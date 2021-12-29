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
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        cpassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(12),
        ]),
      },
      this.checkPasswords
    );
  }

  onSubmit() {
    console.log(this.registrationForm);
  }
}
