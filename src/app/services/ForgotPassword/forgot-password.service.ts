import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IForgotPassword} from '../../models/iforgotpassword';
import {IReset} from '../../models/iresetpassword'

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
   
  url = 'http://localhost/BusRForU/api/ForgotPassword/';
  httpOptions = {
                  headers: new HttpHeaders({'Content-Type':'application/json'})
                };

  constructor(private http:HttpClient) { }
 
  forgotpassword(data:IForgotPassword):Observable<any>{
       return this.http.post<any>(this.url+"sendEmail/",data,this.httpOptions);
  }
  
  resetPassword(data:IReset):Observable<any>{
    return this.http.put<any>(this.url+"Putresetpassword/",data,this.httpOptions);
  }

}
