import { Injectable } from '@angular/core';
import {HttpClient,HttpClientXsrfModule,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs' ;
import {IBus} from '../../Models/iadmin';
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

  addbus(bus: IBus): Observable<IBus>{
    return this.http.post<IBus>(this.url+"PostBus",bus, this.httpOptions );
  }
    
  deletebus(busid : number) :Observable<IBus>{
    ​​​​​ return this.http.delete<IBus>(this.url+"DeleteBus/" +busid); 
  }​​​​​
 
editbus(bus: IEdit): Observable<IEdit>{
  return this.http.put<IEdit>(this.url+"PutBus/" +bus.Bus_Id , bus, this.httpOptions );
}
getData(id:number): Observable<IBus>{​​​​​
  return this.http.get<IBus>(this.url+"GetBus/" + id);
}​​​​​


}
  
// this.url+'PutBus/' +bus.Bus_Id , bus, this.httpOptions