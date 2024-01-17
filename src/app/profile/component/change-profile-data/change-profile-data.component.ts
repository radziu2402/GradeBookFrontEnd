import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl} from "@angular/forms";
import {BaseFormComponent} from "../../../core/component/base-form/base-form.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user";
import {ProfileService} from "../../service/profile.service";
import {throwError} from "rxjs";

@Component({
  selector: 'change-profile-data',
  templateUrl: './change-profile-data.component.html',
  styleUrl: './change-profile-data.component.scss',
})
export class ChangeProfileDataComponent extends BaseFormComponent implements OnInit {
  @Input()
  userData: User;

  @Output()
  updateData$ = new EventEmitter<User>();

  constructor(formBuilder: UntypedFormBuilder, private profileService: ProfileService) {
    super(formBuilder);
  }

  submit(): void {
    const collectedData: User = this.collectData();
    console.log(collectedData);
    this.profileService.updateProfileData(collectedData).subscribe(
      {
        next: (data) => this.updateData$.emit(data),
        error: () => throwError("Error")
      }
    )

  }

  protected setupForm(): any[] {
    return [{
      login: new UntypedFormControl(this.userData.login),
      email: new UntypedFormControl(this.userData.email),
      password: new UntypedFormControl(this.userData.password),
    }];
  }

  collectData(): User {
    return {
      firstName: this.userData.firstName,
      secondName: this.userData.secondName,
      dateOfBirth: this.userData.dateOfBirth,
      login: this.form.get('login').value,
      password: this.form.get('password').value,
      email: this.form.get('email').value
    }
  }
}

