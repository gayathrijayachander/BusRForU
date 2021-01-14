import { Component, OnInit, NgZone } from '@angular/core';
import {PaymentServiceService,ICustomWindow} from '../../services/Payment/payment-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  ngOnInit(): void {
  }
  
  private _window: ICustomWindow;
  public rzp: any;

  totalfare : number = + this.route.snapshot.paramMap.get('amount');

  public options: any = {
    key: 'rzp_test_QvrExmj5fby6T6', //  razorpay key 
    name: 'BusRForU',
    description: 'Confirm your Booking, by Proceeding with payment',
    amount: this.totalfare * 100, //amount in paisa
    prefill: {
      name: '',
      email: '', 
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          this.router.navigate(['PaymentComponent']);
        })
      })
    }
  };

  constructor(
    private zone: NgZone,
    private paymentservice: PaymentServiceService,
    private router : Router,
    private route : ActivatedRoute
  ) {
    this._window = this.paymentservice.nativeWindow;
    this.paymentservice.modeofpayment = "razorpay";
  }

  initPay(): void {
    this.rzp = new this.paymentservice.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
      console.log(res);
      console.log(res.razorpay_payment_id);
      this.router.navigate(['paymentSuccess'])
    });
  }

}
