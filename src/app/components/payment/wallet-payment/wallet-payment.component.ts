import { Component, OnInit } from '@angular/core';
import {WalletServiceService} from '../../../services/Wallet/wallet-service.service';
import { IWallet} from '../../../models/iwallet';

@Component({
  selector: 'app-wallet-payment',
  templateUrl: './wallet-payment.component.html',
  styleUrls: ['./wallet-payment.component.sass']
})
export class WalletPaymentComponent implements OnInit {

  id : number = 1000;
  balance : number;
  constructor(private walletservice : WalletServiceService) 
  { 
    this.walletservice.getWalletBalance(this.id).subscribe((data: IWallet) => {this.balance = data.Balance});
  }

  ngOnInit(): void {
  }

  initPayment() :void{
       
  }

}
