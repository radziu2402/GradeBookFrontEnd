export interface Student {
  id: number
  firstName: string,
  lastName: string,
  className: string
}

export interface StudentItem {
  data: Student,
  deleteAction: () => void;
  addAction: () => void;
}