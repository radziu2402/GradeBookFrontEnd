export interface Grade {
  id: number;
  gradeValue: number;
  dateOfModification: string;
  subjectName: string;
  teacherFirstName: string;
  teacherLastName: string;
}

export interface GradeItem {
  data: Grade;
  action: () => void;
}

export interface NewGrade {
  gradeValue: number;
  studentId: number;
}
