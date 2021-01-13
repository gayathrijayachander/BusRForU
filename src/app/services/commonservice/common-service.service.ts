import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bookingDetails } from '../../models/booking-details';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  
  //id:any=1;
  url = "http://localhost/BusRForU/api/seatDetails";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  bookingDetails:bookingDetails = new bookingDetails();
  constructor(private httpClient: HttpClient) { }

    //Login Authetication
    getAllSeatsDetails(bus_id:any): Observable<any>{
      return this.httpClient.get(this.url+"/getseatdetails?Bus_id="+ bus_id);

        }
        // Putavailablity():Observable<any>{
        //   return this.httpClient.put(this.url+"/Putavailablity"+);
        // }

    Putavailablity(selectedSeats:any[]):Observable<any[]>
    {
      
      this.bookingDetails.noOfPassengers = selectedSeats.length;
      console.log(this.bookingDetails.noOfPassengers);
      return this.httpClient.put<any[]>(this.url + "/Putavailablity",selectedSeats, this.httpOptions);
    }

    GetBookingDetails():bookingDetails
    {
      return this.bookingDetails;
    }

  getBusDetails(id):Observable<any[]>{
      return this.httpClient.get<any[]>(this.url+"/GetBusDetails?id="+ id);

  }
}