import {NgModule} from '@angular/core';
import {Internship} from './internship.model';

@NgModule()
export class Company {
  name: string | undefined;
  speciality: string | undefined;
  country: string | undefined;
  city: string | undefined;
  address: string | undefined;
  internships: Internship[];
  constructor() {}
}
