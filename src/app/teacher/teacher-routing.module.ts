import {TeacherDashboardComponent} from "./component/teacher-dashboard/teacher-dashboard.component";
import {StudentsTaughtByTeacherResolverService} from "./resolvers/StudentsTaughtByTeacherResolverService";
import {authGuard} from "../core/service/guard/auth.guard";
import {teacherGuard} from "../core/service/guard/teacher.guard";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StudentsTableComponent} from './component/students-table/students-table.component';
import {StudentsGradesComponent} from './component/students-grades/students-grades.component';
import {studentsGradesResolver} from './resolvers/students-grades.resolver';

const teacherModuleRoutes: Routes = [
  {
    path: '',
    component: TeacherDashboardComponent,
    children: [
      {
        path: 'students',
        component: StudentsTableComponent,
        pathMatch: "full",
        resolve: {
          data: StudentsTaughtByTeacherResolverService
        },
      },
      {
        path: ':trxid/grades',
        component: StudentsGradesComponent,
        pathMatch: "full",
        resolve: {
          grades: studentsGradesResolver
        },
      }
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(teacherModuleRoutes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
}
