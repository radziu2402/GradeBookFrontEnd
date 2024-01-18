import {Component, OnInit} from '@angular/core';
import {AttendanceDTO, AttendancesService} from "../../service/attendances.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-student-attendances',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './student-attendances.component.html',
  styleUrl: './student-attendances.component.scss'
})
export class StudentAttendancesComponent implements OnInit {
  attendances: AttendanceDTO[] = [];
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' | null = null;

  constructor(private attendancesService: AttendancesService) {}

  ngOnInit(): void {
    this.loadAttendances();
  }

  loadAttendances(): void {
    this.attendancesService.getAttendances().subscribe(data => {
      this.attendances = data;
    });
  }

  onSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.attendances.sort((a, b) => {
      if (a[this.sortColumn] < b[this.sortColumn]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (a[this.sortColumn] > b[this.sortColumn]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
