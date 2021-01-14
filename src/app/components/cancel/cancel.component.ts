import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from '../../services/Payment/payment-service.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.sass']
})
export class CancelComponent implements OnInit {
 Transaction_id:any
 authObject:any
  constructor(private paymentservice: PaymentServiceService,private router: Router) { }

  cancel() {
    this.paymentservice.cancel(this.Transaction_id).subscribe
    (data => { 
      this.authObject = data;
       if(this.authObject==true)
       {
         alert("cancelled successfully");

       }
       else{
         alert("enter valid id");
       }
     
     });
  }
  
  savecancel(Transaction_id:any): void {
    this.cancel();
  }
  ngOnInit(): void {
  }

}