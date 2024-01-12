import {RouterModule, Routes} from "@angular/router";
import {StudentDashboardComponent} from "../student/component/student-dashboard/student-dashboard.component";
import {NgModule} from "@angular/core";
import {UserProfileComponent} from "./component/user-profile/user-profile.component";
import {ChangeProfileDataComponent} from "./component/change-profile-data/change-profile-data.component";
import {profileResolver} from "./resolver/profile.resolver";

const profileModuleRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    pathMatch: "full",
    resolve: {
      userData: profileResolver
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileModuleRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
