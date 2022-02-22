import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Company} from '../models/company.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.AUTH_URL;

  constructor(private http: HttpClient) { }

  login(email: string , password: string , userRole: string){
    return this.http.post(this.url + 'login', {email , password , userRole});
  }

  isConnect(){
    const isAuth = localStorage.getItem('isAuth');
    return (isAuth === 'true');
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('credentials') || '{}');
  }

  generatePassword(length){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  logout() {
    localStorage.setItem('isAuth', 'false');
    localStorage.setItem('credentials', '{}');
  }
}
