import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentDashboardComponent} from './component/student-dashboard/student-dashboard.component';
import {StudentGradesComponent} from './component/student-grades/student-grades.component';
import {StudentTeachersComponent} from "./component/student-teachers/student-teachers.component";
import {StudentAttendancesComponent} from "./component/student-attendances/student-attendances.component";
import {StudentClassComponent} from "./component/student-class/student-class.component";
import {StudentHomeComponent} from "./component/student-home/student-home.component";
import {UserProfileComponent} from '../profile/component/user-profile/user-profile.component';
import {profileResolver} from '../profile/resolver/profile.resolver';


const studentModuleRoutes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
    children:
      [
        {
          path: 'home',
          component: StudentHomeComponent,
          pathMatch: 'full'
        },
        {
          path: 'profile',
          component: UserProfileComponent,
          pathMatch: "full",
          resolve: {
            userData: profileResolver
          }
        },
        {
          path: 'grades',
          component: StudentGradesComponent,
          pathMatch: "full"
        },
        {
          path: 'teachers',
          component: StudentTeachersComponent,
          pathMatch: 'full'
        },
        {
          path: 'attendances',
          component: StudentAttendancesComponent,
          pathMatch: 'full'
        },
        {
          path: 'myclass',
          component: StudentClassComponent,
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentModuleRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
