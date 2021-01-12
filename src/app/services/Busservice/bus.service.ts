import { Injectable } from '@angular/core';
import {HttpClient,HttpClientXsrfModule,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs' ;
import {IAdmin} from '../../Models/iadmin';
import { IEdit } from '../../Models/iedit';

@Injectable({
  providedIn: 'root'
})

export class BusServiceService {

  url = 'http://localhost/BusForU/api/Bus/';
  httpOptions={
    headers :new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http:HttpClient) { }

  addbus(bus: IAdmin): Observable<IAdmin>{
    return this.http.post<IAdmin>(this.url+"PostBus",bus, this.httpOptions );
  }
    
  deletebus(busid : number) :Observable<IAdmin>{
    ​​​​​ return this.http.delete<IAdmin>(this.url+"DeleteBus/" +busid); 
  }​​​​​
 
editbus(bus: IEdit): Observable<IEdit>{
  return this.http.put<IEdit>(this.url+"PutBus/" +bus.Bus_Id , bus, this.httpOptions );
}
getData(id:number): Observable<IAdmin>{​​​​​
  return this.http.get<IAdmin>(this.url+"GetBus/" + id);
}​​​​​


}
  
// this.url+'PutBus/' +bus.Bus_Id , bus, this.httpOptions