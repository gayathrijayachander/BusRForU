import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISignup } from 'src/app/models/isignup';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user : ISignup;
  m : string;
  
  

  constructor(private userdetails: UserService,private router: Router, private route : ActivatedRoute) {​​​​​​​ }​​​​​​​
  getUserInfo(mail:string): void{​​​​​​​
    this.userdetails.getData(mail).subscribe((data:ISignup)=>{​​​​​​​
      this.user = data;
      this.m = data.Email_id;
    }​​​​​​​)
  }​​​​​​​

 //newChange(): void {
   // this.router.navigateByUrl('edit/m');
  //}
  ngOnInit(): void {
    
    const mail = this.route.snapshot.paramMap.get('email');
    this.getUserInfo(mail);
    
  }

}
