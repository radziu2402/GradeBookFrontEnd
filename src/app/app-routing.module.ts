import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from "./core/component/login/login.component";
import {TeacherDashboardComponent} from "./core/component/teacher-dashboard/teacher-dashboard.component";
import {StudentDashboardComponent} from "./core/component/student-dashboard/student-dashboard.component";
import {
  AdministratorDashboardComponent
} from "./core/component/administrator-dashboard/administrator-dashboard.component";
import {resolve} from "@angular/compiler-cli";
import {StudentsTaughtByTeacherResolverService} from "./core/resolvers/StudentsTaughtByTeacherResolverService";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'administrator-dashboard', component: AdministratorDashboardComponent},
  {
    path: 'teacher-dashboard',
    component: TeacherDashboardComponent,
    resolve: {
      data: StudentsTaughtByTeacherResolverService
    }
  },
  {path: 'student-dashboard', component: StudentDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
