import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Company} from '../models/company.model';
import {HttpClient} from '@angular/common/http';
import {Evaluation} from '../models/evaluation.model';


@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  url = environment.EVALUATION_URL;

  constructor(private http: HttpClient) { }

  createEvaluation(evaluation: Evaluation){
    return this.http.post(this.url, evaluation);
  }
  getAllEvaluations(){
    return this.http.get(this.url);
  }
  getEvaluationById(id: number){
    return this.http.get(this.url + id);
  }

  updateEvaluation(id: number , evaluation: Evaluation){
    return this.http.put(this.url + id, evaluation);
  }

  deleteEvaluationById(id: number){
    return this.http.delete(this.url + id);
  }
  deleteAllEvaluations(){
    return this.http.delete(this.url);
  }

  getEvaluationsByTutorId(id: number){
    return this.http.get(this.url + '/tutor' + id);
  }

  getEvaluationsByInternshipId(internshipId: number){
    return this.http.get(this.url + 'internship/' + internshipId);
  }



}
