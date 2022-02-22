import {NgModule} from '@angular/core';

@NgModule()
export class Evaluation {
  id: number|undefined;
  date: Date | undefined ;
  globalScore: number | undefined;
  tutorScore: number | undefined;
  internshipId: number | undefined;
  tutorId: number | undefined;

  constructor() {}
}
