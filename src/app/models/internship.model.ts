import {NgModule} from '@angular/core';

@NgModule()
export class Internship {
  id: number | undefined;
  topic: string | undefined;
  description: string | undefined;
  post: string | undefined;
  tasks: string | undefined;
  start_date: string | undefined;
  end_date: string | undefined;
  accepted: string | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  studentId: number | undefined;
  companyId: number | undefined;
  tutorId: number | undefined;
  constructor() {}
}
