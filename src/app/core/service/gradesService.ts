import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GradesService {
  private apiUrl = 'http://localhost:8080/api/v1/grades';

  constructor(private http: HttpClient) {}

  getGrades(): Observable<Grade[]> {
    const headers = new HttpHeaders({
      Authorization: 'jwt_token',
    });
    return this.http.get<Grade[]>(this.apiUrl, { headers });
  }
}

export interface Grade {
  gradeValue: number;
  dateOfModification: string;
  subjectName: string;
  teacherFirstName: string;
  teacherLastName: string;
}
