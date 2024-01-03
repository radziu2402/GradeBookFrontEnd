import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './core/component/homepage/homepage.component';
import {LoginComponent} from "./core/component/login/login.component";
import {TeacherDashboardComponent} from "./core/component/teacher-dashboard/teacher-dashboard.component";
import {StudentDashboardComponent} from "./core/component/student-dashboard/student-dashboard.component";
import {
  AdministratorDashboardComponent
} from "./core/component/administrator-dashboard/administrator-dashboard.component";
import {StudentsTaughtByTeacherResolverService} from "./core/resolvers/StudentsTaughtByTeacherResolverService";
import {authGuard} from "./core/service/guard/auth.guard";
import {studentGuard} from "./core/service/guard/student.guard";
import {adminGuard} from "./core/service/guard/admin.guard";
import {teacherGuard} from "./core/service/guard/teacher.guard";
import {StudentGradesComponent} from "./core/component/student-dashboard/student-grades/student-grades.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'administrator-dashboard', component: AdministratorDashboardComponent, canActivate: [authGuard, adminGuard]},
  {path: 'student-dashboard', component: StudentDashboardComponent, canActivate: [authGuard, studentGuard], children: [
      {path: 'grades', component: StudentGradesComponent, canActivate: [authGuard, studentGuard]},
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]},
  {
    path: 'teacher-dashboard',
    component: TeacherDashboardComponent,
    resolve: {
      data: StudentsTaughtByTeacherResolverService
    },
    canActivate: [authGuard, teacherGuard]
  },
  {
    path: 'student-dashboard/:any',
    redirectTo: 'student-dashboard/',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
