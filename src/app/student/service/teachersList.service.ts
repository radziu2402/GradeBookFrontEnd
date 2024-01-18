import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersListService {
  private apiUrl = environment.api + 'teachers';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<SubjectsTeacherDTO[]> {
    return this.http.get<SubjectsTeacherDTO[]>(this.apiUrl);
  }
}

export interface SubjectsTeacherDTO {
  subjectName: string;
  teacherFirstName: string;
  teacherLastName: string;
  academicDegree: string;
}
