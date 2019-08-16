import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  serviceUrl = 'http://localhost:3000/enroll';
  constructor(private http: HttpClient) { }

  enroll(user: User) {
    return this.http.post<any>(this.serviceUrl, user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
