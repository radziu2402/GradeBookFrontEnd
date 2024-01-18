import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl = environment.api + 'myclass';

  constructor(private http: HttpClient) {}

  getClass(): Observable<ClassDTO> {
    return this.http.get<ClassDTO>(this.apiUrl);
  }
}

export interface ClassDTO {
  tutorFirstName: string;
  tutorLastName: string;
  academicDegree: string;
  inClassStudents: StudentDto[];
}

export interface StudentDto {
  id: number;
  firstName: string;
  lastName: string;
  className: string;
}
