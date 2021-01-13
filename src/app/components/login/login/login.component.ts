import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/Auth/auth.service';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup
  authObject:any
  loginMail : string = null;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private userservice : UserService) { }

  ngOnInit(): void {
    this.initializeFrom();
  }

  initializeFrom(): void {
    this.signInForm = this.fb.group({
      emailId: "",
      password: "",
      formCheckInput: ""
    });
  }


  onSubmit(): void {
    console.log(this.signInForm);
    var obj = {
      "emailId": this.signInForm.value.emailId,
      "password": this.signInForm.value.password

    }

    this.authService.getUserAuthentication(obj)
     .subscribe(data => { 
       this.authObject = data;
       if(this.authObject.role == "User")
       {
        this.userservice.mailId = this.loginMail;
        console.log("login page"+ this.userservice.mailId);
        this.router.navigate(['user/',this.loginMail]);
       }
       else{
        this.router.navigateByUrl("/edit-bus", {state: {data:this.authObject}});
       }
      
      });
  }
}