import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-topup-success',
  templateUrl: './wallet-topup-success.component.html',
  styleUrls: ['./wallet-topup-success.component.sass']
})
export class WalletTopupSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goTOWallet(){
    this.router.navigate(['wallet']);
  }

}
