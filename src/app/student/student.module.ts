import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentRoutingModule} from "./student-routing.module";
import {StudentDashboardComponent} from "./component/student-dashboard/student-dashboard.component";
import {StudentGradesComponent} from "./component/student-grades/student-grades.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {ShowProfileDataComponent} from "../profile/component/show-profile-data/show-profile-data.component";

@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentGradesComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class StudentModule { }
