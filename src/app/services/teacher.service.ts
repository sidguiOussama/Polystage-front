import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Company} from '../models/company.model';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../models/teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url = environment.TEACHER_URL;

  constructor(private http: HttpClient) { }

  createTeacher(teacher: Teacher){
    return this.http.post(this.url, teacher);
  }
  getAllTeachers(){
    return this.http.get(this.url);
  }
  getTeacherById(id: number){
    return this.http.get(this.url + id);
  }

  updateTeacher(id: number , teacher: Teacher){
    return this.http.put(this.url + id, teacher);
  }

  deleteTeacherById(id: number){
    return this.http.delete(this.url + id);
  }
  deleteAllTeachers(){
    return this.http.delete(this.url);
  }

  getTeacherByName(name: string){
    return this.http.get(this.url + '/teacher/' + name);
  }

  addMarkByTeacher(body: any){
    return this.http.post(this.url + 'addMark' , body);
  }

  getTeachersEvaluationByEvalutionId(idEvaluation: number){
    return this.http.get(this.url + 'getMarks/' + idEvaluation);
  }

  updateEvaluation(body: any){
    return this.http.put(this.url + 'evaluation/edit' , body);
  }

  deleteEvalution(teacherId: number , evaluationId: number){
    return this.http.delete(this.url + 'evaluation/delete/' + teacherId + '/' + evaluationId);
  }



}
