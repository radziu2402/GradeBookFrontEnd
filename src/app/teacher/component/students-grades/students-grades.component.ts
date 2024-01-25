import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Grade} from '../../../student/service/gradesService';
import {GradeTableService} from "../../service/grade-table.service";
import {GradeItem} from "../../model/Grade";
import {Observable} from "rxjs";


@Component({
  selector: 'app-students-grades',
  templateUrl: './students-grades.component.html',
  styleUrl: './students-grades.component.scss'
})
export class StudentsGradesComponent implements OnInit {
  grades$: Observable<GradeItem[]>;
  trxid: number;

  constructor(private route: ActivatedRoute,
              private gradeTableService: GradeTableService) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.grades$ = this.gradeTableService.getTableItems(data['grades']);
    });
  }
}
