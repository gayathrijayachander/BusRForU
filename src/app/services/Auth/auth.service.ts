import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost/BusRForU/api/Auth";
  constructor(private httpClient: HttpClient) { }

  //Login Authetication
  getUserAuthentication(postObj: any): Observable<any>{
    return this.httpClient.get(this.url+"/GetLogin?Email_id="+postObj.emailId+"&Password="+postObj.password, postObj);
  }
  addSignup(sign:any):Observable<any>{
    return this.httpClient.post(this.url+"/PostSignup",sign);
  }
}