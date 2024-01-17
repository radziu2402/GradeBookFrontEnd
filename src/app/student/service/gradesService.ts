import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class GradesService {
  private apiUrl = environment.api + 'grades';

  constructor(private http: HttpClient) {}

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl);
  }
}

export interface Grade {
  gradeValue: number;
  dateOfModification: string;
  subjectName: string;
  teacherFirstName: string;
  teacherLastName: string;
}
