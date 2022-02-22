import {NgModule} from '@angular/core';

@NgModule()
export class Student {
  name: string | undefined;
  password: string | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  phone: string | undefined;

  country: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
  address: string | undefined;

  level: string | undefined;
  cycle: string | undefined;
  option: string | undefined;
  constructor() {}
}
