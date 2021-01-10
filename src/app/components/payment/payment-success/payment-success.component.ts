import { Component, OnInit } from '@angular/core';
import { IPayment } from 'src/app/models/ipayment';
import {IBooking} from '../../../models/ibooking';
import {BookingServiceService} from '../../../services/booking/booking-service.service';
import {PaymentServiceService} from '../../../services/Payment/payment-service.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.sass']
})
export class PaymentSuccessComponent implements OnInit {

  transactionId :number = 125
  booking : IBooking;
  isShow : boolean = true;
  totalFare : number;
  constructor(private bookingservice :BookingServiceService , private paymentservice : PaymentServiceService) { 
  
   this.bookingservice.getBookingDetails(this.transactionId).subscribe((data : IBooking) => {this.booking = data; console.log(data)});
   this.paymentservice.getPaymentDetails(this.transactionId).subscribe((data : IPayment) => {this.totalFare = data.Amount});
  }

  ngOnInit(): void {
  }

}
