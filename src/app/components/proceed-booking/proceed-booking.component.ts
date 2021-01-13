import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonServiceService} from '../../services/commonservice/common-service.service';

@Component({
  selector: 'app-proceed-booking',
  templateUrl: './proceed-booking.component.html',
  styleUrls: ['./proceed-booking.component.sass']
})
export class ProceedBookingComponent implements OnInit {

  details:any
  infoForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonServiceService) { }


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
        age:"",
      //  idNumber:""
      }))

      console.log(this.travelers);
    }
      
  }
  
 
  getBookingDetails(): void 
  {
     this.details = this.commonService.GetBookingDetails();
     console.log(this.details);
     this.addForms();

  }
  updateBookingDetails(): void{
    this.commonService.bookingDetails.passangers = this.infoForm.value.travellers;
  }
  onSubmit():void {
    
    this.updateBookingDetails();
    console.log( "amount"+this.commonService.bookingDetails.totalFare);
    this.router.navigate(['payment/', this.commonService.bookingDetails.totalFare])
  }
}