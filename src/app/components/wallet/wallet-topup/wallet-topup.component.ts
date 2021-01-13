import { Component, OnInit, NgZone } from '@angular/core';
import {PaymentServiceService,ICustomWindow} from '../../../services/Payment/payment-service.service';
import {WalletServiceService} from '../../../services/Wallet/wallet-service.service'
import {ActivatedRoute, Router} from '@angular/router';
import { IWallet } from 'src/app/models/iwallet';

@Component({
  selector: 'app-wallet-topup',
  templateUrl: './wallet-topup.component.html',
  styleUrls: ['./wallet-topup.component.sass']
})
export class WalletTopupComponent implements OnInit {


  ngOnInit(): void {
    
  }
  private _window: ICustomWindow;
  public rzp: any;

  
  constructor( private zone: NgZone,
    private paymentservice: PaymentServiceService,
    private router : Router, private walletservice : WalletServiceService , private route : ActivatedRoute) 
  {
    this._window = this.paymentservice.nativeWindow; 
  }

  topup :number = + this.route.snapshot.paramMap.get('amount');
  id : number = + this.route.snapshot.paramMap.get('id');
  data : IWallet = {
    Wallet_id : null,
    user_id: this.id,
    Balance: this.topup,
    SignUp : null
  }
  public options: any = {
    key: 'rzp_test_QvrExmj5fby6T6', // add razorpay key here
    name: 'BusRForU',
    description: 'Wallet Top-Up',
    amount: this.topup * 100, // razorpay takes amount in paisa
    prefill: {
      name: '',
      email: '', // email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          this.router.navigate(['wallet']);
        })
      })
    }
  };

  initPay(): void {
    this.rzp = new this.paymentservice.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
      console.log(res);
      console.log(res.razorpay_payment_id);
      this.walletservice.makeWalletTopup(this.data).subscribe(()=>{console.log("done");});
      this.router.navigate(['topupSuccess']);
    });
  }

}
