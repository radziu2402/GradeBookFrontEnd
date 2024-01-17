import {Component, OnInit} from '@angular/core';
import {Grade, GradesService} from "../../../service/gradesService";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrl: './student-grades.component.scss'
})

export class StudentGradesComponent implements OnInit {
  grades: Grade[] = [];
  displayedColumns: string[] = ['Ocena', 'Data wystawienia', 'Przedmiot', 'Nauczyciel'];

  dataSource = new MatTableDataSource<any>(this.grades);
  constructor(private gradesService: GradesService) {}

  ngOnInit(): void {
    this.loadGrades();
  }

  private loadGrades(): void {
    this.gradesService.getGrades().subscribe(
      (grades) => {
        this.grades = grades;
        this.dataSource.data = this.grades;
      },
      (error) => {
        console.error('Error loading grades', error);
      }
    );
  }
}
