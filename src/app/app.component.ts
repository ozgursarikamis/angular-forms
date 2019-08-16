import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenUsernamesValidator } from './shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usernameValidators =
        [ Validators.required,
          Validators.minLength(3),
          forbiddenUsernamesValidator(/password/),
          forbiddenUsernamesValidator(/admin/)
  ];
  registrationForm = this.formBuilder.group({
    username: ['Vishwas', this.usernameValidators],
    password: [''],
    confirmPassword: [''],
    address: this.formBuilder.group({
      city: ['Van'], state: [''], postalCode: ['']
    })
  });
  constructor(private formBuilder: FormBuilder) { }

  get username() {
    return this.registrationForm.get('username');
  }
}
