import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ISignup } from 'src/app/Models/isignup';
import { SignupServiceService } from 'src/app/services/Signupservice/sign-up.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  signup : ISignup ={
    First_Name : null,
    Last_Name : null,
    Email_id : null,
    Password : null,
    Contact_Number : null,
    Address : null
  };
  
  constructor(private signupservice: SignupServiceService,private router: Router ) { }

addSignup() {
  this.signupservice.adduser(this.signup).subscribe(
    ( )=> {
      console.log("--");
      
      alert("Recorded Added");
      this.router.navigate(['/list']);
    }
  );
}

saveSignup(signup : ISignup): void {
  this.signup=signup;
  this.addSignup();
}

  ngOnInit(): void {
  }
 
}
