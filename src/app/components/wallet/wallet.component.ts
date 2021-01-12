import { Component, OnInit, NgZone } from '@angular/core';
import { WalletServiceService } from '../../services/Wallet/wallet-service.service';
import { IWallet } from '../../models/iwallet';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit {

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

  }

}
