import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../model/Student";
import {AuthService} from "../../../core/service/security/auth.service";

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.scss'
})
export class TeacherDashboardComponent {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  onLogout() {
    this.authService.logout();
  }
}
