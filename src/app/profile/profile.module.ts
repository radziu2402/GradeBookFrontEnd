import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {UserProfileComponent} from "./component/user-profile/user-profile.component";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {ChangeProfileDataComponent} from "./component/change-profile-data/change-profile-data.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ProfileRoutingModule} from "./profile-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {ShowProfileDataComponent} from "./component/show-profile-data/show-profile-data.component";


@NgModule({
  declarations: [
    UserProfileComponent,
    ChangeProfileDataComponent,
    ShowProfileDataComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        MatCardModule,
        RouterLink,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        NgOptimizedImage
    ]
})
export class ProfileModule {
}
