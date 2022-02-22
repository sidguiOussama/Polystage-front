import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InternshipService} from '../../../services/internship.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Internship} from '../../../models/internship.model';
import {Company} from '../../../models/company.model';
import {Tutor} from '../../../models/tutor.model';
import {CompanyService} from '../../../services/company.service';
import {TutorService} from '../../../services/tutor.service';
import {AuthService} from '../../../services/auth.service';
import {EvaluationService} from '../../../services/evaluation.service';
import {Evaluation} from '../../../models/evaluation.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-new-internship-dialog',
  templateUrl: './new-internship-dialog.component.html',
  styleUrls: ['./new-internship-dialog.component.scss']
})
export class NewInternshipDialogComponent implements OnInit {

  internship: Internship = new Internship();
  company: Company = new Company();
  tutor: Tutor = new Tutor();
  constructor( private internshipService: InternshipService, private companyService: CompanyService , private tutorService: TutorService,
               private evaluationService: EvaluationService, private toastr: ToastrService,
               public dialogRef: MatDialogRef<NewInternshipDialogComponent>, private authService: AuthService,
               @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data.id);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  async onClick(){
    let companyId = null;
    let tutorId = null;
    let companyResponse: any;
    let tutorResponse: any;
    if (this.company.name != null){
      companyResponse =  await this.companyService.findCompanyByName(this.company.name).toPromise();
      if (companyResponse.status === 'Success' && companyResponse.data != null ){
          console.log(companyResponse);
          companyId = companyResponse.data.id;
      }else {
        companyResponse = await this.companyService.createCompany(this.company).toPromise();
        if (companyResponse.status === 'Success' && companyResponse.data != null) {
          companyId = companyResponse.data.id;
        }
      }
    }

    if (this.tutor.email != null){
      tutorResponse =  await this.tutorService.getTutorByEmail(this.tutor.email).toPromise();
      if (tutorResponse.status === 'Success' && tutorResponse.data != null){
        console.log(tutorResponse);
        tutorId = tutorResponse.data.id;
      }else {
        this.tutor.password = this.authService.generatePassword(10);
        tutorResponse = await this.tutorService.createTutor(this.tutor).toPromise();
        if (tutorResponse.status === 'Success' && tutorResponse.data != null) {
          tutorId = tutorResponse.data.id;
          this.tutorService.sendEmail({email: tutorResponse.data.email,
                                            password : tutorResponse.data.password , studentName : this.data.login}).subscribe(
            (data: any) => {
              console.log(data);
            }
          );
        }
      }
    }

    if (companyId != null && tutorId != null){
        this.internship.companyId = companyId;
        this.internship.tutorId = tutorId;
        this.internship.studentId = this.data.id;
        const evaluation = new Evaluation();
        evaluation.tutorId = tutorId;
        this.internshipService.createInternship(this.internship).subscribe(
          (data: any) => {
            if (data.status === 'Success' && data.data != null){
              evaluation.internshipId = data.data.id;
              this.evaluationService.createEvaluation(evaluation).subscribe((data2) => {
                    this.toastr.success('Success Operation');
                    this.dialogRef.close('ok');
              });
            }else {
              this.toastr.error(data.message);
            }
          }
        );
    }
  }

}
