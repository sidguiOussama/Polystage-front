import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Internship} from '../../../models/internship.model';
import {InternshipService} from '../../../services/internship.service';
import {TutorService} from '../../../services/tutor.service';
import {CompanyService} from '../../../services/company.service';
import {Tutor} from '../../../models/tutor.model';
import {Company} from '../../../models/company.model';
import {AuthService} from '../../../services/auth.service';
import {SharedDataService} from '../../../services/SharedDataService';
import {AngularFireStorage} from '@angular/fire/storage';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-details-internship',
  templateUrl: './details-internship.component.html',
  styleUrls: ['./details-internship.component.scss']
})
export class DetailsInternshipComponent implements OnInit {

  isAddFile = false;
  currentUser: any;
  id;
  internship: Internship;
  tutor: Tutor;
  company: Company;
  selectedFile = null;
  constructor(private route: ActivatedRoute, private storage: AngularFireStorage,
              private internshipService: InternshipService, private authService: AuthService, private tutorService: TutorService,
              private toastr: ToastrService,
              private companyService: CompanyService, private sharedDataService: SharedDataService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.id = this.route.snapshot.params.id;
    this.internshipService.getInternshipById(this.id).subscribe(
      (data: any) => {
        if (data.status === 'Success' && data.data != null){
          this.internship = data.data;
          console.log(data.data);
          this.getRecord(data.data.companyId, data.data.tutorId).then();
        }
      }
    );
  }

  async getRecord(companyId , tutorId){
    let response: any;
    response = await this.tutorService.getTutorById(tutorId).toPromise();
    if (response.status === 'Success' && response.data != null){
      this.tutor = response.data;
    }

    response = await this.companyService.findCompanyById(companyId).toPromise();
    if (response.status === 'Success' && response.data != null){
      this.company = response.data;
    }
  }

  goToEvalution() {
    this.router.navigateByUrl('/detailsEvaluation/' + this.internship.id);
  }

  addReport() {
    this.isAddFile = true;
  }

  onFileSelected(event){
    if (event.target.files.length > 0){
      this.selectedFile = event.target.files[0];
    }else {
      this.selectedFile = '';
    }
  }

  valideUplaod() {
    console.log(this.selectedFile);
    if (this.selectedFile != null){
      this.storage.ref('polystage/' + this.internship.id).put(this.selectedFile)
        .then(res => {this.toastr.success('success operation'); this.isAddFile = false; });
    }
  }
}
