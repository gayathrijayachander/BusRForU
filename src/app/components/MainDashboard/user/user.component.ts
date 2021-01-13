import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
email : string;
  constructor(private router: Router, private route : ActivatedRoute, private userservice : UserService) { }

  ngOnInit(): void {
    const mail = this.route.snapshot.paramMap.get('email');
    this.email = "imgayu4699@gmail.com";
  }

  goToTrips(){
    this.router.navigate(['/book/',this.email]);
  }
}