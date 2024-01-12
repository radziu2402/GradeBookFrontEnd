import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-navbar',
  templateUrl: './teacher-navbar.component.html',
  styleUrl: './teacher-navbar.component.scss'
})
export class TeacherNavbarComponent {
  constructor(private router: Router) {
  }

  navigateToProfile() {
    void this.router.navigate(['profile/'])
  }
}
