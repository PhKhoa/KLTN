import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recruiter } from '../../models/recruiter.model';
import { URL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {


  constructor(private httpClient: HttpClient) {}

  createRecruiter(recruiter: any, company: any){
    const data = {
      recruiter: recruiter,
      company: company
    }
    return this.httpClient.post<Recruiter>(`${URL}/recruiter/create`, data);
  }

  getByUser(user: string){
    return this.httpClient.get<Recruiter>(`${URL}/recruiter/getByUser?_id=${user}`);
  }

  getBy_id(id: string){
    return this.httpClient.get<Recruiter>(`${URL}/recruiter/getBy_id?id=${id}`);
  }

  getAll(){
    return this.httpClient.get<Recruiter[]>(`${URL}/recruiter/getAll`);
  }

  update(recruiter: Recruiter,id: string,token:string){
    console.log(token);
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.put<Recruiter>(`${URL}/recruiter/update?id=${id}`, recruiter,{ headers });
  }
}
