import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from "./component/user-profile/user-profile.component";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ProfileModule {
}
