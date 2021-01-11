<<<<<<< HEAD
import { Component, OnInit, NgZone } from '@angular/core';
import { WalletServiceService } from '../../services/Wallet/wallet-service.service';
import { IWallet } from '../../models/iwallet';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
import {WalletServiceService} from '../../services/Wallet/wallet-service.service';
import {IWallet} from '../../models/iwallet';
>>>>>>> 8567de71f36e80ed04cda076612e785f66a171fe

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit {

<<<<<<< HEAD
  id: number = 1000;  // to pass user_id
  balance: number;
  topupAmount: number;
  amount: number;
  isShow : boolean = true;

  ngOnInit(): void {
  }

  constructor(private walletservice: WalletServiceService, private router: Router) {
    this.walletservice.getWalletBalance(this.id).subscribe((data: IWallet) => { this.balance = data.Balance });

  }

  saveAmount(topupAmount) {
    this.topupAmount = topupAmount;
    console.log("amount ->" + this.topupAmount);
    this.amount = this.topupAmount;
    this.walletservice.topupAmount = this.topupAmount;
    this.router.navigate(['walletTopup/',this.amount,this.id])
  }
  show(){
    this.isShow = false;
=======
  id : number = 1000;
  balance : number ;
  constructor(private walletservice : WalletServiceService) 
  {
    this.walletservice.getWalletBalance(this.id).subscribe((data: IWallet) => {this.balance = data.Balance});
  }

  ngOnInit(): void {
>>>>>>> 8567de71f36e80ed04cda076612e785f66a171fe
  }

}
