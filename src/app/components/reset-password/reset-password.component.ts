import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { IReset } from '../../models/iresetpassword';
import {ForgotPasswordService} from '../../services/ForgotPassword/forgot-password.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {
  data: IReset={mailId:null,password:null}
  password :string;
  confirmpassword : string;
  constructor(private router : Router, private route : ActivatedRoute, private forgotservice : ForgotPasswordService)
   {
    this.data.mailId = this.route.snapshot.paramMap.get('mail');
    }

  ngOnInit(): void {
  }

  resetPassword(){
    if(this.password == this.confirmpassword)
    {
      this.data.password = this.password;
      this.forgotservice.resetPassword(this.data).subscribe((value)=>{alert(value);});
        this.router.navigate(['']);
    }
    else{
      alert("password does not match");
      this.router.navigate(['resetpassword']);
    }
  }
}
