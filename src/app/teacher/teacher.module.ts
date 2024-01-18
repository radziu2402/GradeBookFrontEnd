import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherRoutingModule} from "./teacher-routing.module";
import {TeacherDashboardComponent} from "./component/teacher-dashboard/teacher-dashboard.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {TeacherNavbarComponent} from './component/teacher-navbar/teacher-navbar.component';
import {ActionItemComponent} from './component/action-item/action-item.component';
import {MatIconModule} from '@angular/material/icon';
import {StudentsTableComponent} from './component/students-table/students-table.component';
import {StudentsGradesComponent} from './component/students-grades/students-grades.component';



@NgModule({
  declarations: [
      TeacherDashboardComponent,
      TeacherNavbarComponent,
      ActionItemComponent,
      StudentsTableComponent,
      StudentsGradesComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TeacherModule { }
