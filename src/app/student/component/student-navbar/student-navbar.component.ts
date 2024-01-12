import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrl: './student-navbar.component.scss'
})
export class StudentNavbarComponent {

  constructor(private router: Router) {}

  navigateToProfile() {
    void this.router.navigate(['profile/'])
  }
}
