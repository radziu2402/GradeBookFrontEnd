import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from "./component/user-profile/user-profile.component";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {UserProfileFormComponent} from "./component/user-profil-form/user-profile-form.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ProfileRoutingModule} from "./profile-routing.module";


@NgModule({
  declarations: [UserProfileComponent, UserProfileFormComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    RouterLink,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class ProfileModule {
}
