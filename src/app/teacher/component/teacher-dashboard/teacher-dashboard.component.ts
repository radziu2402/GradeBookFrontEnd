import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../model/Student";
import {MatListModule} from "@angular/material/list";
import {tryUnwrapForwardRef} from "@angular/compiler-cli/src/ngtsc/annotations/common";
import {BehaviorSubject} from "rxjs";
import {AuthService} from "../../../core/service/security/auth.service";

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.scss'
})
export class TeacherDashboardComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'secondName', 'className'];
  dataSource: Student[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.dataSource = this.route.snapshot.data['data'].students;
  }

  navigateToProfile() {
    void this.router.navigate(['/profile'])
  }

  onLogout() {
    this.authService.logout();
  }
}
