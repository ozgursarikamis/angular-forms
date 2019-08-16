import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registrationForm = this.formBuilder.group({
    username: ['Vishwas'],
    password: [''],
    confirmPassword: [''],
    address: this.formBuilder.group({
      city: ['Van'], state: [''], postalCode: ['']
    })
  });
  constructor(private formBuilder: FormBuilder) {
  }
}
