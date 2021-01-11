import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IWallet} from '../../models/iwallet';

@Injectable({
  providedIn: 'root'
})
export class WalletServiceService {
<<<<<<< HEAD

  topupAmount : number ;
=======
>>>>>>> 8567de71f36e80ed04cda076612e785f66a171fe
  
  url = 'http://localhost/BusRForU/api/wallet/';
  httpOptions = {
                  headers: new HttpHeaders({'Content-Type':'application/json'})
                };

  constructor(private http:HttpClient) { }

  getWalletBalance(id:number):Observable<IWallet>
  {
    return this.http.get<IWallet>(this.url+"GetWalletInfo/"+id);
  }
  makeWalletPayment(data:IWallet):Observable<IWallet>
  {
    return this.http.put<IWallet>(this.url+"PutWallet/"+data.user_id, data ,this.httpOptions);
  }
<<<<<<< HEAD
  makeWalletTopup(data:IWallet):Observable<IWallet>
  {
    return this.http.put<IWallet>(this.url+"PutWalletTopup/"+data.user_id,data,this.httpOptions);
  }
=======
>>>>>>> 8567de71f36e80ed04cda076612e785f66a171fe
}
