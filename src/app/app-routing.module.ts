import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './core/component/homepage/homepage.component';
import {LoginComponent} from './core/component/login/login.component';
import {authGuard} from './core/service/guard/auth.guard';
import {studentGuard} from './core/service/guard/student.guard';
import {adminGuard} from './core/service/guard/admin.guard';
import {teacherGuard} from './core/service/guard/teacher.guard';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule),
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(module => module.StudentModule),
    canActivate: [authGuard, studentGuard],
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(module => module.TeacherModule),
    canActivate: [authGuard, teacherGuard],
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
