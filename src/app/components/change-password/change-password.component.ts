import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {IChange} from '../../models/ichange';
import {IPass} from '../../models/ipass';
import {UserService} from '../../services/user/user.service';
import {Router , ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {

  signup : IPass ;
  change:IChange={
    Password:null,
    Email_id:null
  }

  pass:string;
  oldpass:string;
  confirmpass:string;
  m:string;
  
  

  constructor(private signupservice: UserService,private router: Router ,private route : ActivatedRoute) { }

  editpassword() {​​​​​​​
    this.signupservice.editpassword(this.change).subscribe(
      ( )=> {​​​​​​​
        alert("Password Updated");
        this.router.navigate(['/user/',this.change.Email_id]);
      }​​​​​​​
    ); 
  }​​​​​​​  

saveSignup( cc : IChange): void {

 
 console.log(this.change);
 this.change.Email_id=this.signup.Email_id;
console.log(this.change.Email_id);
console.log(this.change.Password);
  console.log(this.pass);
  console.log(this.oldpass);
  console.log(this.confirmpass);
  console.log(this.change.Password);
  //this.pass != this.oldpass &&
  if (  this.change.Password != this.confirmpass) {
    alert("Wrong details")
    
  } else if(this.pass != this.oldpass ){

   alert("Wrong details")
  }

    
  else{
   this.editpassword();
  }
  
}
getUserInfo(mail:string): void{
  this.signupservice.getData1(mail).subscribe((data:IPass)=>{
  
   
    this.signup=data;
    this.oldpass=data.Password;
    
    
  })
}

ngOnInit(): void {​​​​​​​
  const mail =  this.route.snapshot.paramMap.get('email');
  
  this.m=mail;
  this.getUserInfo(mail);
  
}
}
