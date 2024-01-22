import {TeacherDashboardComponent} from './component/teacher-dashboard/teacher-dashboard.component';
import {StudentsTaughtByTeacherResolverService} from './resolvers/StudentsTaughtByTeacherResolverService';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentsTableComponent} from './component/students-table/students-table.component';
import {StudentsGradesComponent} from './component/students-grades/students-grades.component';
import {studentsGradesResolver} from './resolvers/students-grades.resolver';
import {UserProfileComponent} from '../profile/component/user-profile/user-profile.component';
import {profileResolver} from '../profile/resolver/profile.resolver';
import {TeacherHomeComponent} from './component/teacher-home/teacher-home.component';
import {GradeFormComponent} from './component/grade-form/grade-form.component';


const teacherModuleRoutes: Routes = [
  {
    path: '',
    component: TeacherDashboardComponent,
    children: [
      {
        path: 'home',
        component: TeacherHomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        pathMatch: 'full',
        resolve: {
          userData: profileResolver
        }
      },
      {
        path: 'students',
        component: StudentsTableComponent,
        pathMatch: 'full',
        resolve: {
          data: StudentsTaughtByTeacherResolverService
        },
      },
      {
        path: 'grades/:trxid',
        component: StudentsGradesComponent,
        pathMatch: 'full',
        resolve: {
          grades: studentsGradesResolver
        },
      },
      {
        path: 'new-grade/:trxid',
        component: GradeFormComponent,
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(teacherModuleRoutes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
}
