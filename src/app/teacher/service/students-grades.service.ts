import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Grade} from '../../student/service/gradesService';

@Injectable({
  providedIn: 'root'
})
export class StudentsGradesService {

  private readonly studentsGradesUrls = (trxid: number) => `${environment.api}/grades/${trxid}`;

  constructor(private http: HttpClient) {
  }

  getGrades(trxid: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.studentsGradesUrls(trxid));
  }
}
