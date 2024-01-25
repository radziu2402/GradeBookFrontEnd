import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Grade} from '../../student/service/gradesService';
import {NewGrade} from '../model/Grade';

@Injectable({
  providedIn: 'root'
})
export class StudentsGradesService {

  private readonly studentsGradesUrls = (trxid: number) => `${environment.api}/grades/${trxid}`;

  private readonly gradeUrl = environment.api + '/grades';

  constructor(private http: HttpClient) {
  }

  getGrades(trxid: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.studentsGradesUrls(trxid));
  }

  deleteGrade(gradeId: number): Observable<any> {
    return this.http.delete<any>(this.gradeUrl, {params: new HttpParams().set('id', gradeId)});
  }

  addGrade(grade: NewGrade) {
    return this.http.post<NewGrade>(this.gradeUrl, grade);
  }
}
