import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../../services/auth.service';
import {TeacherService} from '../../../services/teacher.service';
import {ToastrService} from 'ngx-toastr';
import {EvaluationService} from '../../../services/evaluation.service';

@Component({
  selector: 'app-add-mark-dialog',
  templateUrl: './add-mark-dialog.component.html',
  styleUrls: ['./add-mark-dialog.component.scss']
})
export class AddMarkDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddMarkDialogComponent>, private authService: AuthService, private toastr: ToastrService,
               private evalutionService: EvaluationService,
               private teacherService: TeacherService,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  note;
  ngOnInit(): void {
    console.log(this.data);
    if (this.data.userString === 'tutor'){
      this.note = this.data.evaluation.tutorScore;
    }else{
      if (this.data.template === 'new'){
      }else if (this.data.template === 'edit'){
        this.note = this.data.note;
      }
    }
  }

  onclick(){
    console.log(this.data.userId, this.data.evaluationId);
    const body = {score: +this.note, teacherId: this.data.userId , evaluationId: this.data.evaluationId};
    if (this.data.userString === 'tutor'){
      this.data.evaluation.score = this.note;
      console.log(this.data.evaluation);
      this.evalutionService.updateEvaluation(this.data.evaluation.id, this.data.evaluation).subscribe(
        (data: any) => {
          if (data.status === 'Success'){
            this.toastr.success('Success operation');
            this.dialogRef.close('ok');
          }
        }
      );
    }else {
      if (this.data.template === 'new'){
        this.teacherService.addMarkByTeacher(body).subscribe(
          (data: any) => {
            console.log(data);
            this.toastr.success('Success operation');
            this.dialogRef.close('ok');
          }
        );
      }
      else if (this.data.template === 'edit'){
        this.teacherService.updateEvaluation(body).subscribe(
          (data: any) => {
            console.log(data);
            this.toastr.success('Success operation');
            this.dialogRef.close('ok');
          }
        );
      }
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
