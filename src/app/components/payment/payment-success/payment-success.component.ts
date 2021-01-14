import { Component, OnInit } from '@angular/core';
import { IPayment } from 'src/app/models/ipayment';
import {IBooking} from '../../../models/ibooking';
import {BookingServiceService} from '../../../services/booking/booking-service.service';
import {PaymentServiceService} from '../../../services/Payment/payment-service.service';
import {CommonServiceService} from '../../../services/commonservice/common-service.service';
import {UserService} from '../../../services/user/user.service';
import {passangers} from '../../../models/passangers';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.sass']
})
export class PaymentSuccessComponent implements OnInit {

  rn : number = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  transactionId :number = this.rn;
  booking : IBooking;
  isShow : boolean = true;
  totalFare : number;
  passengers : passangers[];
  data : any;
  selectedSeats: any[];
  payment : IPayment = { Transaction_Id : null,
    Amount : null,
    ModeofPayment : null,
    Email_Id : null,
    DateOfTransaction :null}
  constructor(private bookingservice :BookingServiceService , private paymentservice : PaymentServiceService, private commonService : CommonServiceService, private userservice : UserService) { 
  
 //  this.bookingservice.getBookingDetails(this.transactionId).subscribe((data : IBooking) => {this.booking = data; console.log(data)});
 //  this.paymentservice.getPaymentDetails(this.transactionId).subscribe((data : IPayment) => {this.totalFare = data.Amount});
    this.selectedSeats = this.commonService.bookingDetails.selectedSeats;
    this.passengers =   this.commonService.passDetail;
    this.data = this.commonService.GetBookingDetails();
    this.totalFare = this.passengers.length * this.data.Fare;
    this.payment.Transaction_Id = this.transactionId;
    this.payment.Amount = this.totalFare;
    this.payment.ModeofPayment = this.paymentservice.modeofpayment;
    this.payment.Email_Id =  this.userservice.mailId;
    this.payment.DateOfTransaction = new Date();
    this.paymentservice.makeTransaction(this.payment).subscribe((data)=>{console.log(data);});
    this.commonService.Putavailablity(this.selectedSeats).subscribe(()=>{});
  }

  ngOnInit(): void {
  }

}
