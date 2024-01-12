import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../core/service/security/auth.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogout(){
    this.authService.logout();
  }

  navigateToProfile() {
    void this.router.navigate(['profile/'])
  }
}
