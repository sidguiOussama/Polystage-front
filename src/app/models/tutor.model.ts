import {NgModule} from '@angular/core';

@NgModule()
export class Tutor {
  name: string | undefined;
  password: string | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  country: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
  address: string | undefined;

  post: string | undefined;

  constructor() {}
}
