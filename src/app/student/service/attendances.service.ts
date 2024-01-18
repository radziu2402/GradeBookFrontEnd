import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendancesService {
  private apiUrl = environment.api + 'attendances';

  constructor(private http: HttpClient) {}

  getAttendances(): Observable<AttendanceDTO[]> {
    return this.http.get<AttendanceDTO[]>(this.apiUrl);
  }
}

export interface AttendanceDTO {
  date: string;
  present: boolean;
  subjectName: string;
  teacherFirstName: string;
  teacherLastName: string;
}
