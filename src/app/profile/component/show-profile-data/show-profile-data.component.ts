import {Component, Input} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'show-profile-data',
  templateUrl: './show-profile-data.component.html',
  styleUrl: './show-profile-data.component.scss'
})
export class ShowProfileDataComponent {
  @Input()
  profileData: User;
}
