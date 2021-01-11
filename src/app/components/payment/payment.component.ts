import { Component, OnInit, NgZone } from '@angular/core';
import {PaymentServiceService,ICustomWindow} from '../../services/Payment/payment-service.service';
import {Router} from '@angular/router';

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

  public options: any = {
    key: 'rzp_test_QvrExmj5fby6T6', // add razorpay key here
    name: 'BusRForU',
    description: 'Confirm your Booking, by Proceeding with payment',
    amount: 100, // razorpay takes amount in paisa
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
<<<<<<< HEAD
          this.router.navigate(['PaymentComponent']);
=======
          // add current page routing if payment fails
>>>>>>> 8567de71f36e80ed04cda076612e785f66a171fe
        })
      })
    }
  };

  constructor(
    private zone: NgZone,
<<<<<<< HEAD
    private paymentservice: PaymentServiceService,
    private router : Router
  ) {
    this._window = this.paymentservice.nativeWindow;
  }

  initPay(): void {
    this.rzp = new this.paymentservice.nativeWindow['Razorpay'](this.options);
=======
    private winRef: PaymentServiceService,
    private router : Router
  ) {
    this._window = this.winRef.nativeWindow;
  }

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
>>>>>>> 8567de71f36e80ed04cda076612e785f66a171fe
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
