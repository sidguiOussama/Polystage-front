import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Company} from '../models/company.model';
import {HttpClient} from '@angular/common/http';
import {Student} from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = environment.STUDENT_URL;

  constructor(private http: HttpClient) { }

  createStudent(student: Student){
    return this.http.post(this.url, student);
  }
  getAllStudents(){
    return this.http.get(this.url);
  }
  getStudentById(id: number){
    return this.http.get(this.url + id);
  }

  updateStudent(id: number , student: Student){
    return this.http.put(this.url + id, student);
  }

  deleteStudentById(id: number){
    return this.http.delete(this.url + id);
  }
  deleteAllStudents(){
    return this.http.delete(this.url);
  }

  getStudentByName(name: string){
    return this.http.get(this.url + '/student/' + name);
  }
  getStudentByIdIncludeInternships(id: number){
    return this.http.get(this.url + id + '/internships');
  }



}
