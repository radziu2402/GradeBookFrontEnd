import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../service/security/auth.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

  constructor(private authService: AuthService) {
  }

  onLogout(){
    this.authService.logout();
  }
}
