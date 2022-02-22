import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCompaniesComponent } from './components/Company/list-companies/list-companies.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/Auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserInternshipsComponent } from './components/Internship/user-internships/user-internships.component';
import { NewInternshipDialogComponent } from './components/Internship/new-internship-dialog/new-internship-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSliderModule} from '@angular/material/slider';
import { DetailsInternshipComponent } from './components/Internship/details-internship/details-internship.component';
import { InternshipEvalutionDetailsComponent } from './components/Evaluation/internship-evalution-details/internship-evalution-details.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddMarkDialogComponent } from './components/Evaluation/add-mark-dialog/add-mark-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {ToastrModule} from 'ngx-toastr';
import { CompanyDetailsDialogComponent } from './components/Company/company-details-dialog/company-details-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCompaniesComponent,
    HeaderComponent,
    LoginComponent,
    UserInternshipsComponent,
    NewInternshipDialogComponent,
    DetailsInternshipComponent,
    InternshipEvalutionDetailsComponent,
    AddMarkDialogComponent,
    CompanyDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    MatSliderModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot({positionClass: 'toast-top-center'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
