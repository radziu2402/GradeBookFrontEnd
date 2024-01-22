import {Injectable} from '@angular/core';
import {Student, StudentItem} from '../model/Student';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentTableService {

  private tableItemsSubject$: BehaviorSubject<StudentItem[]>;

  constructor(private router: Router) {
  }

  public getTableItems(students: Student[]): Observable<StudentItem[]> {
    const tableItems = students.map(student => this.mapToTableItem(student));
    this.tableItemsSubject$ = new BehaviorSubject<StudentItem[]>(tableItems);
    return this.tableItemsSubject$.asObservable();
  }

  private mapToTableItem(student: Student): StudentItem {
    return {
      data: student,
      deleteAction: () => this.router.navigate([`teacher/grades/${student.id}`]),
      addAction: () => this.router.navigate([`teacher/new-grade/${student.id}`])
    }
  }
}
