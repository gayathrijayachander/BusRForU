import { Component, OnInit } from '@angular/core';
import {WalletServiceService} from '../../services/Wallet/wallet-service.service';
import {IWallet} from '../../models/iwallet';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit {

  id : number = 1000;
  balance : number ;
  constructor(private walletservice : WalletServiceService) 
  {
    this.walletservice.getWalletBalance(this.id).subscribe((data: IWallet) => {this.balance = data.Balance});
  }

  ngOnInit(): void {
  }

}
