import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../services/company.service';
import {Company} from '../../../models/company.model';
import {AuthService} from '../../../services/auth.service';
import {NewInternshipDialogComponent} from '../../Internship/new-internship-dialog/new-internship-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CompanyDetailsDialogComponent} from '../company-details-dialog/company-details-dialog.component';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent implements OnInit {

  companies: Company[] = [];
  user: any;
  constructor(private companyService: CompanyService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
      this.user = this.authService.getCurrentUser();
      this.companyService.findAllCompanies().subscribe(
      (data: any) => {
        if (data.status === 'Success' && data.data != null){
          this.companies = data.data;
          console.log(data.data);
        }
      }
    );
  }

  openDialog(company: any): void {
    const dialogRef = this.dialog.open(CompanyDetailsDialogComponent, {
      width: '80%',
      height: '90%',
      data: {company: company}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'ok'){
      }
    });
  }
  searchByName($event: KeyboardEvent) {

  }
}
