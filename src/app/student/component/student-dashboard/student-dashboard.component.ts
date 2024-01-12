import {Component} from '@angular/core';
import {AuthService} from '../../../core/service/security/auth.service';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {

  constructor(private authService: AuthService) {}

  onLogout(){
    this.authService.logout();
  }
}
