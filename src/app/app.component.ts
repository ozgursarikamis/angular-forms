import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('', 'rob@test.com', '5556665566', 'default', 'evening', true);

  topicHasError = true;
  validateTopic(val: string) {
    if (val === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
