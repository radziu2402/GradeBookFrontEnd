import {Component, OnInit} from '@angular/core';
import {ClassDTO, ClassService} from "../../service/class.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-student-class',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './student-class.component.html',
  styleUrl: './student-class.component.scss'
})
export class StudentClassComponent implements OnInit {
  classData: ClassDTO | null = null;

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    this.classService.getClass().subscribe(data => {
      this.classData = data;
    });
  }
}



