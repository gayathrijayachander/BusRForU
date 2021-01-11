import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISignup } from 'src/app/models/isignup';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  user : ISignup;
  mail:string;

  constructor(private userdetails: UserService,private router: Router, private route : ActivatedRoute) {​​​​​​​ }​​​​​​​
  getUserInfo(mail:string): void{​​​​​​​
    this.userdetails.getData(mail).subscribe((data:ISignup)=>{​​​​​​​
      this.user = data;console.log(data);
      this.mail=data.Email_id;
    }​​​​​​​)
  }​​​​​​​
  
editUser() {​​​​​​​
  this.userdetails.editUser(this.user).subscribe(
    ( )=> {​​​​​​​
      alert("Recorded Edited");
      this.router.navigate(['/profile/',this.user.Email_id]);
    }​​​​​​​
  );
}​​​​​​​
saveUser(user : ISignup): void {​​​​​​​
  
  this.user=user;
  this.editUser();
}​​​​​​​
  ngOnInit(): void {​​​​​​​
    const mail =  this.route.snapshot.paramMap.get('email');
    this.getUserInfo(mail);
  }​​​​​​​


}
