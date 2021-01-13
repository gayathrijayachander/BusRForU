import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { passangers } from 'src/app/models/passangers';
import {CommonServiceService} from '../../services/commonservice/common-service.service';

@Component({
  selector: 'app-proceed-booking',
  templateUrl: './proceed-booking.component.html',
  styleUrls: ['./proceed-booking.component.sass']
})
export class ProceedBookingComponent implements OnInit {

  passDetail : any[] = [];
  totalseat : number = + this.route.snapshot.paramMap.get("seat")
  
  details:any
  infoForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonServiceService ,private route : ActivatedRoute) { }

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
    console.log("passdetails"+this.passDetail);
    this.commonService.bookingDetails.passangers = this.infoForm.value.travellers;
    console.log("----------------------passenger detail");
    console.log(this.commonService.bookingDetails.passangers);
  }
  onSubmit():void {
    
    this.updateBookingDetails();
    console.log( "fare"+this.commonService.bookingDetails.totalFare);
    this.router.navigate(['payment/', this.commonService.bookingDetails.totalFare])
  }
}