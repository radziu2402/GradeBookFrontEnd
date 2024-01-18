import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsTeacherDTO, TeachersListService } from "../../service/teachersList.service";

@Component({
  selector: 'app-student-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-teachers.component.html',
  styleUrls: ['./student-teachers.component.scss']
})
export class StudentTeachersComponent implements OnInit {
  teachers: SubjectsTeacherDTO[] = [];

  constructor(private teachersListService: TeachersListService) {}

  ngOnInit(): void {
    this.teachersListService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }
}
