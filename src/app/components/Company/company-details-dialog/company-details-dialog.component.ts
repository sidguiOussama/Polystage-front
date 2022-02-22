import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../../services/auth.service';
import {Internship} from '../../../models/internship.model';
import {Router} from '@angular/router';
import {Company} from '../../../models/company.model';

@Component({
  selector: 'app-company-details-dialog',
  templateUrl: './company-details-dialog.component.html',
  styleUrls: ['./company-details-dialog.component.scss']
})
export class CompanyDetailsDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CompanyDetailsDialogComponent>, private authService: AuthService, private router: Router,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  internships: Internship[];
  company: Company;
  ngOnInit(): void {
    this.internships = this.data.company.internships;
    this.company = this.data.company;
  }
}
