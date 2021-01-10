import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IPayment} from '../../models/ipayment';

export interface ICustomWindow extends Window {
  __custom_global_stuff: string;
}

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  url = 'http://localhost/BusRForU/api/Payment/';
  httpOptions = {
                  headers: new HttpHeaders({'Content-Type':'application/json'})
                };

  constructor(private http:HttpClient) { }
  get nativeWindow(): ICustomWindow {
    return getWindow();
  }

  getPaymentDetails(id:number):Observable<IPayment>
  {
    return this.http.get<IPayment>(this.url+"GetTransactionDetail/"+id);
  }

}
