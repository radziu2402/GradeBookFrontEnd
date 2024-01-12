import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherRoutingModule} from "./teacher-routing.module";
import {TeacherDashboardComponent} from "./component/teacher-dashboard/teacher-dashboard.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [TeacherDashboardComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class TeacherModule { }
