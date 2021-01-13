import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ISignup } from 'src/app/models/isignup';
import {Observable,of} from 'rxjs' ;
import {IPass} from '../../models/ipass';
import {IChange} from '../../models/ichange';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  mailId : string ;
  url='http://localhost/BusRForU/api/Register';
  httpOptions={
    headers :new HttpHeaders({'Content-Type':'application/json'})
  };
    constructor(private http:HttpClient) { }

    getData(email:string): Observable<ISignup>{​​​​​
      return this.http.get<ISignup>(this.url+'/GetUser?email=' + email);
    }​​​​​
  
    editUser(user: ISignup): Observable<ISignup>{​​​​​​​
      return this.http.put<ISignup>(this.url+'/PutUser?id=' + user.user_id , user, this.httpOptions );
    }​​​​​​​
    getData1(email:string): Observable<IPass>{​​​​​
      return this.http.get<IPass>(this.url+'/GetUser2?email=' + email);
    }​​​​​
    editpassword(user: IPass): Observable<IChange>{
      return this.http.put<IChange>(this.url+'/PutPassword?email=' + user.Email_id , user, this.httpOptions );
    }
}
