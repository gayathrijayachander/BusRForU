import { Component, OnInit, NgZone } from '@angular/core';
import {PaymentServiceService,ICustomWindow} from '../../services/Payment/payment-service.service';

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
          // add current page routing if payment fails
        })
      })
    }
  };

  constructor(
    private zone: NgZone,
    private winRef: PaymentServiceService
  ) {
    this._window = this.winRef.nativeWindow;
  }

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
      console.log(res);
      console.log(res.razorpay_payment_id);
    });
  }

}
