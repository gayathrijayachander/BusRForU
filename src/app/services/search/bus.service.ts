import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooking } from 'src/app/models/ibooking';
import { ICust } from 'src/app/models/icust';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  format = 'yyyy-MM-dd';
  mydate='thu 2020-08-02';
  locale ='en-US';
  formattedDate2=formatDate(this.mydate,this.format,this.locale)
  formatteDate

   url = 'http://localhost/BusRForU/api/Search/';
    httpOptions={​​    headers :new HttpHeaders({​​'Content-Type':'application/json'}​​)  }​​;  
  constructor(private http:HttpClient) {​​ }​​ 
   getBuslist(src:string,dest:string,date:Date): Observable<ICust[]>{​​  
    this.formatteDate=formatDate(date,this.format,this.locale)
      return this.http.get<ICust[]>(this.url+"Getlist?src="+src+"&dest="+dest+"&date="+this.formatteDate,this.httpOptions); 
   }

  getData(id:number): Observable<IBooking>{​​​​​
    return this.http.get<IBooking>(this.url+'/GetBookings?id=' + id);
  }​​​​​

    ​​}​​    
