import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {ActivatedRoute} from "@angular/router";
import {Student} from "../../model/Student";
import {MatListModule} from "@angular/material/list";
import {tryUnwrapForwardRef} from "@angular/compiler-cli/src/ngtsc/annotations/common";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    MatListModule
  ],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css'
})
export class TeacherDashboardComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'secondName', 'className'];
  dataSource: Student[] = [];
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dataSource = this.route.snapshot.data['data'].students;
  }
}
