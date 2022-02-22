import { Component, OnInit } from '@angular/core';
import {InternshipService} from '../../../services/internship.service';
import {Internship} from '../../../models/internship.model';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {NewInternshipDialogComponent} from '../new-internship-dialog/new-internship-dialog.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-internships',
  templateUrl: './user-internships.component.html',
  styleUrls: ['./user-internships.component.scss']
})
export class UserInternshipsComponent implements OnInit {

  internships: Internship [] = [];
  initInternships = [];
  user: any;
  id: any;
  constructor(private internshipService: InternshipService, public dialog: MatDialog, private route: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.user = JSON.parse(localStorage.getItem('credentials') || '{}');
    console.log(this.user);
    this.setRecord().then();
  }

  async setRecord(){
    let response;
    if (this.user.role === 'Student'){
      response = await this.internshipService.getInternshipsByStudentId(this.user.id).toPromise();
    }else if (this.user.role === 'Tutor'){
      response = await this.internshipService.getEvaluationsByTutorId(this.user.id).toPromise();
    }else if (this.user.role === 'Teacher'){
      response = await this.internshipService.getAllInternships().toPromise();
    }
    if (response.status === 'Success' && response.data != null){
      console.log(response.data);
      this.initInternships = response.data;
      this.internships = response.data;
      console.log(this.internships);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewInternshipDialogComponent, {
      width: '80%',
      height: '90%',
      data: {id: this.user.id , name: this.user.login},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'ok'){
        this.setRecord();
      }
    });
  }

  onDelete(id: number) {
    this.internshipService.deleteInternshipById(id).subscribe(
      (data: any) => {
        if (data.status === 'Success'){
          this.toastr.success('InternShip Id= ' + id + ' was Deleted');
          this.setRecord();
        }
      }
    );
  }

  searchByName(event) {
    if (event.target.value === ''){
      this.setRecord();
    }else {
      this.internships = this.initInternships.filter(res => res.student.firstname.includes(event.target.value) ||
        res.student.lastname.includes(event.target.value) ||
        res.student.email.includes(event.target.value)
      );

    }
  }
}
