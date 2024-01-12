export enum ROLES {
  ADMINISTRATOR = 'ADMINISTRATOR',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER'
}

export const MAP_ROLE_TO_URL: { [key in ROLES]: string } = {
  ADMINISTRATOR: 'admin/',
  STUDENT: 'student/',
  TEACHER: 'teacher/',
}
