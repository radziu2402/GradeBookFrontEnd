import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentDashboardComponent} from './component/student-dashboard/student-dashboard.component';
import {StudentGradesComponent} from './component/student-grades/student-grades.component';


const studentModuleRoutes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
    children:
      [
        {
          path: 'grades',
          component: StudentGradesComponent,
          pathMatch: "full"
        }
      ]
  },
  {
    path: '**',
    redirectTo: 'student'
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentModuleRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
