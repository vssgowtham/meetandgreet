import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../../authentication/models';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) { }

  public getAnnouncements(): Observable<any> {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return this.http.get<any>(environment.baseUrl + "/v1/meet-greet/students/announcement?studentId=" + user.id).pipe(
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }
}
