import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
email : string;
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const mail = this.route.snapshot.paramMap.get('email');
    this.email = mail;
  }

}