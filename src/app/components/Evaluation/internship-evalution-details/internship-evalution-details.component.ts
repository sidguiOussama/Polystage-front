import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Evaluation} from '../../../models/evaluation.model';
import {EvaluationService} from '../../../services/evaluation.service';
import {AuthService} from '../../../services/auth.service';
import {TutorService} from '../../../services/tutor.service';
import {TeacherService} from '../../../services/teacher.service';
import {SharedDataService} from '../../../services/SharedDataService';
import {Subscription} from 'rxjs';
import {Internship} from '../../../models/internship.model';
import {Tutor} from '../../../models/tutor.model';
import {Teacher} from '../../../models/teacher.model';
import {NewInternshipDialogComponent} from '../../Internship/new-internship-dialog/new-internship-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AddMarkDialogComponent} from '../add-mark-dialog/add-mark-dialog.component';
import {AngularFireStorage} from '@angular/fire/storage';
import {ToastrService} from 'ngx-toastr';

export interface TeacherEvaluation{
  score: number;
  createdAt: string;
  teacherId: number;
  evaluationId: number;
}

@Component({
  selector: 'app-internship-evalution-details',
  templateUrl: './internship-evalution-details.component.html',
  styleUrls: ['./internship-evalution-details.component.scss']
})
export class InternshipEvalutionDetailsComponent implements OnInit {


  evaluation: any;
  currentUser: any;
  idInternship;
  tutor: Tutor;
  teachers = [];
  file = null;
  constructor(private authService: AuthService, private tutorService: TutorService, private toastr: ToastrService,
              private teacherService: TeacherService, private route: ActivatedRoute,
              public dialog: MatDialog, private storage: AngularFireStorage,
              private evaluationService: EvaluationService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.idInternship = this.route.snapshot.params.id;
    console.log(this.currentUser);
    this.getRecord();
  }

  getRecord(){
  this.evaluationService.getEvaluationsByInternshipId(this.idInternship).subscribe(
    (data: any) => {
      if (data.status === 'Success'){
        this.evaluation = data.data[0];
        console.log(this.evaluation);
        this.tutor = data.data[0].tutor;
        this.teachers = data.data[0].teachers;
        this.checkIfTeacherAlreadyAddMark();
        this.downloadFiles(this.idInternship).subscribe(
          (image) => {
            if (image != null){
               this.file = image;
            }
          }
        );
      }
    }
  );
  }

  checkIfTeacherAlreadyAddMark(){
    return this.teachers.some(res => res.id === this.currentUser.id );
  }

  addMarkTeacher() {
    console.log(this.evaluation.id);
    const dialogRef = this.dialog.open(AddMarkDialogComponent, {
      width: '40%',
      height: '40%',
      data: {evaluationId: this.evaluation.id , userId: this.currentUser.id , template: 'new' , note: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'ok'){
          this.getRecord();
      }
    });
  }

  editMarkTeacher(note){
    const dialogRef = this.dialog.open(AddMarkDialogComponent, {
      width: '40%',
      height: '40%',
      data: {evaluationId: this.evaluation.id , userId: this.currentUser.id , template: 'edit' , note: note}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'ok'){
        this.getRecord();
      }
    });
  }

  editMarkTutor(){
    const dialogRef = this.dialog.open(AddMarkDialogComponent, {
      width: '40%',
      height: '40%',
      data: {evaluation: this.evaluation , template: 'edit' , userString: 'tutor'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'ok'){
        this.getRecord();
      }
    });
  }

  deleteEvalution(teacherId: number){
      this.teacherService.deleteEvalution(teacherId, this.evaluation.id).subscribe(
        (data: any) => {
          console.log(data);
          if ( data.status === 'Success') {
            this.toastr.success('mark deleted');
            this.getRecord();
          }
        }
      );
  }

  downloadFiles(id){
    return this.storage.ref('polystage/' + id).getDownloadURL();
  }

  download() {
    window.open(this.file);
  }
}
