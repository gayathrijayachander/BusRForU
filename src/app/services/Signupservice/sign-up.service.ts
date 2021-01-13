import { Injectable } from '@angular/core';
import {HttpClient,HttpClientXsrfModule,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs' ;
import {ISignup} from '../../Models/isignup';


@Injectable({
  providedIn: 'root'
})

export class SignupServiceService {
 
  url = 'http://localhost/BusRForU/api/Register/';
  httpOptions={
    headers :new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http:HttpClient) { }

  adduser(signup: ISignup): Observable<ISignup>{
    return this.http.post<ISignup>(this.url+"PostAllSignUpDetails",signup, this.httpOptions );
  }

  

}
  
  