import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user";
import {MAP_ROLE_TO_URL} from "../../../core/const/constants";
import {AuthService} from "../../../core/service/security/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  profileData: User;

  mode: profileMode = 'show';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.profileData = this.route.snapshot.data['userData'];
  }
  navigate() {
    this.mode = 'change';
  }

  goBack() {
    if (this.mode == 'show') {
      void this.router.navigate([MAP_ROLE_TO_URL[this.authService.getRole()]])
    }
    this.mode = 'show';
  }

  isShowMode() {
    return this.mode == 'show';
  }

  isChangeMode() {
    return this.mode == 'change';
  }

  updateData(data: User) {
    this.profileData = data;
    this.mode = 'show';
  }
}

type profileMode = 'change' | 'show';
