import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IBooking} from '../../models/ibooking';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  url = 'http://localhost/BusRForU/api/Booking/';
  httpOptions = {
                  headers: new HttpHeaders({'Content-Type':'application/json'})
                };
 
                constructor(private http:HttpClient) { }

                
  getBookingDetails(id:number):Observable<IBooking>
  {
    return this.http.get<IBooking>(this.url+"GetBookingDetails/"+id);
  }
}
