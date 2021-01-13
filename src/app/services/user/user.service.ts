import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ISignup } from 'src/app/models/isignup';
import {Observable,of} from 'rxjs' ;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost/BusRForU/api/SignUp';
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
}
