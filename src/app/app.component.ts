import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { forbiddenUsernamesValidator } from './shared/username.validator';
import { passwordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;
  ngOnInit() {

    const usernameValidators = [
      Validators.required,
      Validators.minLength(3),
      forbiddenUsernamesValidator(/password/),
      forbiddenUsernamesValidator(/admin/)
    ];

    const address = { city: ['Van'], state: [''], postalCode: [''] };

    this.registrationForm = this.formBuilder.group({
      username: ['Vishwas', usernameValidators],
      password: [''],
      email: [''],
      subscribe: [false],
      confirmPassword: [''],
      address: this.formBuilder.group(address)
    }, { validator: [passwordValidator] }); // passwordValidator is validating the group!

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checked => {
        const email = this.registrationForm.get('email');
        if (checked) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  constructor(private formBuilder: FormBuilder) { }

  get username() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }
}
