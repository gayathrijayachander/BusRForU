import { Component, OnInit } from '@angular/core';
import {ForgotPasswordService} from '../../services/ForgotPassword/forgot-password.service';
import {IForgotPassword} from '../../models/iforgotpassword';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  data: IForgotPassword = {mailId: null, otp: null};
  isShowOtp : boolean = true;
  msg : string="This is not a registered mail Id. Kindly Enter the mail Id with which You have registered !!";
  otp: number = null;
  result: string;
  isShow: boolean = false;
  generatedOtp : number;
  constructor(private forgotpasswordservice :ForgotPasswordService, private router : Router) { }

  ngOnInit(): void {
  }

  forgotpassword(){
    this.forgotpasswordservice.forgotpassword(this.data).subscribe((value)=>{if(value == "false"){alert(this.msg);}else{this.isShow=true;this.isShowOtp = false; this.generatedOtp = value}});
  }
  verifyOtp(){
    if(this.otp == this.generatedOtp)
    {
      this.router.navigate(['resetpassword/',this.data.mailId]);
    }
    else{
      alert("OTP does not match.");
    }
  }
}
