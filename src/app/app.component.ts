import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registrationForm = this.formBuilder.group({
    username: ['Vishwas', [Validators.required, Validators.minLength(3)]],
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
