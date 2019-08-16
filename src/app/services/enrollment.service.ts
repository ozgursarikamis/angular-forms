import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  serviceUrl = 'http://localhost:3000/enroll';
  constructor(private http: HttpClient) { }

  enroll(user: User) {
    return this.http.post<any>(this.serviceUrl, user);
  }
}
