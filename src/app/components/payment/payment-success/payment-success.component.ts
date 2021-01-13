import { Component, OnInit } from '@angular/core';
import { IPayment } from 'src/app/models/ipayment';
import {IBooking} from '../../../models/ibooking';
import {BookingServiceService} from '../../../services/booking/booking-service.service';
import {PaymentServiceService} from '../../../services/Payment/payment-service.service';
import {CommonServiceService} from '../../../services/commonservice/common-service.service';
import {passangers} from '../../../models/passangers';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.sass']
})
export class PaymentSuccessComponent implements OnInit {

  rn : number = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  transactionId :number = 125
  booking : IBooking;
  isShow : boolean = true;
  totalFare : number;
  passengers : passangers[];
  constructor(private bookingservice :BookingServiceService , private paymentservice : PaymentServiceService, private commonService : CommonServiceService) { 
  
   this.bookingservice.getBookingDetails(this.transactionId).subscribe((data : IBooking) => {this.booking = data; console.log(data)});
   this.paymentservice.getPaymentDetails(this.transactionId).subscribe((data : IPayment) => {this.totalFare = data.Amount});
   this.passengers =   this.commonService.bookingDetails.passangers;
  }

  ngOnInit(): void {
  }

}
