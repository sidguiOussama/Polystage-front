import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCompaniesComponent} from './components/Company/list-companies/list-companies.component';
import {LoginComponent} from './components/Auth/login/login.component';
import {UserInternshipsComponent} from './components/Internship/user-internships/user-internships.component';
import {DetailsInternshipComponent} from './components/Internship/details-internship/details-internship.component';
import {
  InternshipEvalutionDetailsComponent
} from './components/Evaluation/internship-evalution-details/internship-evalution-details.component';

const routes: Routes = [

  {path: 'login' , component: LoginComponent },
  {path: 'internships/:id' , component: UserInternshipsComponent },
  {path: 'detailsInternship/:id', component: DetailsInternshipComponent},
  {path: 'companies', component: ListCompaniesComponent},
  {path: 'detailsEvaluation/:id', component: InternshipEvalutionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
