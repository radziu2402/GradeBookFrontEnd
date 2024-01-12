import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherRoutingModule} from "./teacher-routing.module";
import {TeacherDashboardComponent} from "./component/teacher-dashboard/teacher-dashboard.component";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [TeacherDashboardComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatTableModule
  ]
})
export class TeacherModule { }
