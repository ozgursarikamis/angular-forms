import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registrationForm = new FormGroup({
    username: new FormControl('Vishwas'),
    password: new FormControl('123456'),
    confirmPassword: new FormControl('123456')
  });
}
