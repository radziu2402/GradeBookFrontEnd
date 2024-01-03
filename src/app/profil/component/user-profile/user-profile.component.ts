import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  profileData: User;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.profileData = this.route.snapshot.data['userData'];
  }

}
