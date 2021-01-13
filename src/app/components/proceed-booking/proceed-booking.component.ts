import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import {CommonServiceService} from '../../services/commonservice/common-service.service';

@Component({
  selector: 'app-proceed-booking',
  templateUrl: './proceed-booking.component.html',
  styleUrls: ['./proceed-booking.component.sass']
})
export class ProceedBookingComponent implements OnInit {

  details:any
  infoForm: FormGroup
  constructor(private fb: FormBuilder, private commonService: CommonServiceService) { }


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
        name:"",
        age:"",
        email:"",
        phone:"",
        idNumber:""
      }))

      console.log(this.travelers);
    }
      
  }
  
  onSubmit(): void{

  }

  getBookingDetails()
  {
     this.details = this.commonService.GetBookingDetails();
     console.log(this.details);

     this.addForms();

  }
}