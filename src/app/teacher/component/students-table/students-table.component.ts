import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentTableService} from '../../service/student-table.service';
import {StudentItem} from '../../model/Student';
import {Observable} from 'rxjs';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'secondName', 'className', 'action'];

  tableItems$: Observable<StudentItem[]>;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private studentTableService: StudentTableService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.tableItems$ = this.studentTableService.getTableItems(data['data'].students);
    });
  }
}


