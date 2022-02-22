import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Company} from '../models/company.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = environment.COMPANY_URL;

  constructor(private http: HttpClient) { }

  createCompany(company: Company){
    return this.http.post(this.url, company);
  }
  findAllCompanies(){
    return this.http.get(this.url);
  }
  findCompanyById(id: number){
    return this.http.get(this.url + id);
  }

  updateCompany(id: number , company: Company){
    return this.http.put(this.url + id, company);
  }

  removeCompanyById(id: number){
    return this.http.delete(this.url + id);
  }
  removeAllCompanies(){
    return this.http.delete(this.url);
  }

  findCompanyByName(name: string){
    return this.http.get(this.url + 'company/' + name);
  }

  findCompanyByIdIncludeInternships(id: number){
    return this.http.get(this.url + id + '/internships');
  }



}
