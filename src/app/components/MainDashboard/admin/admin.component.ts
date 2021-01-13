import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  email : string;
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const mail = this.route.snapshot.paramMap.get('email');
    this.email = mail;
  }

}