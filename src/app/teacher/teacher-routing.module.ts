import {TeacherDashboardComponent} from "./component/teacher-dashboard/teacher-dashboard.component";
import {StudentsTaughtByTeacherResolverService} from "./resolvers/StudentsTaughtByTeacherResolverService";
import {authGuard} from "../core/service/guard/auth.guard";
import {teacherGuard} from "../core/service/guard/teacher.guard";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const teacherModuleRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TeacherDashboardComponent,
    resolve: {
      data: StudentsTaughtByTeacherResolverService
    },
    canActivate: [authGuard, teacherGuard], children: [
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(teacherModuleRoutes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {}
