import {Component, OnInit} from '@angular/core';
import {Grade, GradesService} from "../../service/gradesService";

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrl: './student-grades.component.scss'
})

export class StudentGradesComponent implements OnInit {
  grades: Grade[] = [];
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' | null = null;
  constructor(private gradesService: GradesService) {
  }

  ngOnInit(): void {
    this.loadGrades();
  }

  private loadGrades(): void {
    this.gradesService.getGrades().subscribe(
      (grades) => {
        this.grades = grades;
      },
      (error) => {
        console.error('Error loading grades', error);
      }
    );
  }

  onSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.grades.sort((a, b) => {
      if (a[this.sortColumn] < b[this.sortColumn]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (a[this.sortColumn] > b[this.sortColumn]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
