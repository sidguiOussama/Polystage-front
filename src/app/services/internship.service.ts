import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Company} from '../models/company.model';
import {HttpClient} from '@angular/common/http';
import {Internship} from '../models/internship.model';


@Injectable({
  providedIn: 'root'
})
export class InternshipService {

  url = environment.INTERNSHIP_URL;

  constructor(private http: HttpClient) { }

  createInternship(internship: Internship){
    return this.http.post(this.url, internship);
  }
  getAllInternships(){
    return this.http.get(this.url);
  }
  getInternshipById(id: number){
    return this.http.get(this.url + id);
  }

  updateInternship(id: number , internship: Internship){
    return this.http.put(this.url + id, internship);
  }

  deleteInternshipById(id: number){
    return this.http.delete(this.url + id);
  }
  deleteAllInternships(){
    return this.http.delete(this.url);
  }

  getInternshipsByStudentId(studentId: number){
    return this.http.get(this.url + 'student/' + studentId);
  }
  getInternshipsByCompanyId(companyId: number){
    return this.http.get(this.url + 'company/' + companyId);
  }
  getEvaluationsByTutorId(tutorId: number){
    return this.http.get(this.url + 'tutor/' + tutorId);
  }




}
