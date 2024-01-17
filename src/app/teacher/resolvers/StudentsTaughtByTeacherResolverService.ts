import {ActivatedRouteSnapshot, Resolve, ResolveFn} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Student} from "../model/Student";
import {TeacherService} from "../service/TeacherService";


@Injectable({
  providedIn: 'root'
})
export class StudentsTaughtByTeacherResolverService implements Resolve<Student[]> {

  constructor(private teacherService: TeacherService) {}

  resolve(): Observable<Student[]> {
    return this.teacherService.getStudents();
  }
}

