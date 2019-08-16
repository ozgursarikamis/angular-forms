import { Component } from '@angular/core';
import { User } from './models/user';
import { EnrollmentService } from './services/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('', 'rob@test.com', '5556665566', 'default', 'evening', true);
  submitted = false;
  errorMessage = '';

  constructor(private enrollmentservice: EnrollmentService) { }
  topicHasError = true;
  validateTopic(val: string) {
    if (val === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm) {
    console.log('userForm :', userForm);
    // this.submitted = true;
    // this.enrollmentservice.enroll(this.userModel)
    //   .subscribe(
    //     data => { console.log('Post Success:', data); },
    //     error => { this.errorMessage = error.statusText; }
    //   );
  }
}
