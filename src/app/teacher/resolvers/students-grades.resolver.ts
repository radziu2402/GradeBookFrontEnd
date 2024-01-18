import {inject} from '@angular/core';
import {StudentsGradesService} from '../service/students-grades.service';
import {Grade} from '../../student/service/gradesService';
import {Observable} from 'rxjs';

export const studentsGradesResolver: (route) => Observable<Grade[]> = (route) => {
  return inject(StudentsGradesService).getGrades(+route.paramMap.get("trxid"));
};
