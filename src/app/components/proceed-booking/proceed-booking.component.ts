import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { passangers } from 'src/app/models/passangers';
import {IPayment} from '../../models/ipayment';
import {CommonServiceService} from '../../services/commonservice/common-service.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-proceed-booking',
  templateUrl: './proceed-booking.component.html',
  styleUrls: ['./proceed-booking.component.sass']
})
export class ProceedBookingComponent implements OnInit {

  passDetail : any = [];
  totalseat : number = + this.route.snapshot.paramMap.get("seat")
  email: string ;

  details:any
  infoForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonServiceService ,private route : ActivatedRoute, private userservice : UserService) 
  {
    this.email = this.userservice.mailId;
   }

  ngOnInit(): void {
    this.initializeFrom();
    this.getBookingDetails();
  }


  initializeFrom(): void {
    this.infoForm = this.fb.group({
      travelers: this.fb.array([

      ])
    });
    
  }
  get travelers()
  {
    return this.infoForm.get('travelers') as FormArray;
  }

  addForms(): void {
    for(let i=0;i<this.details.noOfPassengers;i++){
      console.log("=-------------");
      this.travelers.push(this.fb.group({
        First_Name:"",
        Last_Name:"",
        Gender:"",
        age:""
      //  idNumber:""
     
      }))
      if(i == this.details.noOfPassengers-1)
      {
      console.log(this.travelers.controls);
      console.log(this.travelers.controls[0].value);
      console.log(this.travelers.controls[1].value);
      }
      console.log(this.infoForm.value.travellers);
  
    }  
      
  }
  
 
  getBookingDetails(): void 
  {
     this.details = this.commonService.GetBookingDetails();
     console.log(this.details);
     this.addForms();

  }
  updateBookingDetails(): void{

    for(let i=0;i<this.details.noOfPassengers;i++){
      this.passDetail.push(this.travelers.controls[i].value);
      console.log(this.travelers.controls[i].value);
    }

    this.commonService.passDetail = this.passDetail;
    console.log("passdetails"+this.passDetail[0].age);
    this.commonService.bookingDetails.passangers = this.infoForm.value.travellers;
    this.userservice.mailId = this.email;
    console.log("----------------------passenger detail");
    console.log(this.commonService.bookingDetails.passangers);
  }
  onSubmit():void {
    
    this.updateBookingDetails();
    console.log( "fare"+this.commonService.bookingDetails.totalFare);
    this.router.navigate(['payment/', this.commonService.bookingDetails.totalFare])
  }
}