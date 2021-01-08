import { Component, OnInit } from '@angular/core';
import {WalletServiceService} from '../../../services/Wallet/wallet-service.service';
import { IWallet} from '../../../models/iwallet';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet-payment',
  templateUrl: './wallet-payment.component.html',
  styleUrls: ['./wallet-payment.component.sass']
})

export class WalletPaymentComponent implements OnInit {

  id : number = 1000;    //Todo should come from booking
  fare : number = 500;   //Todo should come from booking
  personCount : number = 2;  //Todo should come from booking
  walletinfo : IWallet;
  balance : number ;
  billAmount : number ;
  isShow : boolean = true;
  constructor(private walletservice : WalletServiceService, private router: Router) 
  { 
    this.walletservice.getWalletBalance(this.id).subscribe((data: IWallet) => {this.walletinfo = data;  this.balance = data.Balance;});   
  }

  ngOnInit(): void {
  }

  initPayment() :void
  {
     this.billAmount = (this.fare * this.personCount);
     if(this.balance >= this.billAmount)
     {
      this.walletinfo.Balance = this.balance - this.billAmount;
      this.walletservice.makeWalletPayment(this.walletinfo).subscribe(() => {this.isShow = false});
     }
     else{
          alert("your wallet balance is less than the bill amount");
     }
  }

}
