import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Company} from '../models/company.model';
import {HttpClient} from '@angular/common/http';
import {Tutor} from '../models/tutor.model';


@Injectable({
  providedIn: 'root'
})
export class TutorService {

  url = environment.TUTOR_URL;

  constructor(private http: HttpClient) { }

  createTutor(tutor: Tutor){
    return this.http.post(this.url, tutor);
  }
  getAllTutors(){
    return this.http.get(this.url);
  }
  getTutorById(id: number){
    return this.http.get(this.url + id);
  }

  updateTutor(id: number , tutor: Tutor){
    return this.http.put(this.url + id, tutor);
  }

  deleteTutorById(id: number){
    return this.http.delete(this.url + id);
  }
  deleteAllTutors(){
    return this.http.delete(this.url);
  }

  getTutorByName(name: string){
    return this.http.get(this.url + '/tutor/' + name);
  }
  getTutorByEmail(email: string){
    return this.http.get(this.url + 'tutor/email/' + email);
  }
  getTutorByIdIncludeInternships(id: number){
    return this.http.get(this.url + id + '/internships');
  }

  sendEmail(info: any){
    return this.http.post(this.url + 'sendMail', info);
  }


}
