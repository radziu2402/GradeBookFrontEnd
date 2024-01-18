import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Grade} from '../../../student/service/gradesService';


@Component({
  selector: 'app-students-grades',
  templateUrl: './students-grades.component.html',
  styleUrl: './students-grades.component.scss'
})
export class StudentsGradesComponent implements OnInit {
  displayedColumns: string[] = ['gradeValue', 'dateOfModification', 'subjectName'];

  grades: Grade[];
  trxid: number;

  // this.trxid = Number(this.route.snapshot.paramMap.get('trxid'));
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.grades = data['grades'];
    });
  }
}
