import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Grade, GradeItem} from '../model/Grade';
import {StudentsGradesService} from './students-grades.service';


@Injectable({
  providedIn: 'root'
})
export class GradeTableService {

  private tableItemsSubject$: BehaviorSubject<GradeItem[]>;

  constructor(private gradeService: StudentsGradesService) {
  }

  public getTableItems(grades: Grade[]): Observable<GradeItem[]> {
    const tableItems = grades.map(grade => this.mapToTableItem(grade));
    this.tableItemsSubject$ = new BehaviorSubject<GradeItem[]>(tableItems);
    return this.tableItemsSubject$.asObservable();
  }

  private mapToTableItem(grade: Grade): GradeItem {
    return {
      data: grade,
      action: () => this.deleteGrade(grade)
    }
  }

  private deleteGrade(grade: Grade): void {
    this.gradeService.deleteGrade(grade.id).subscribe({
      next: () => {
        this.tableItemsSubject$.next(
            this.tableItemsSubject$.getValue().filter(tableItem => tableItem.data.id !== grade.id)
        );
      }
    })
  }
}
