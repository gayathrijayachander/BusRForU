import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBooking } from 'src/app/models/ibooking';
import { BusService } from 'src/app/services/search/bus.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.sass']
})
export class BookingsComponent implements OnInit {
  book:IBooking;
  mail:string;
  constructor(private userdetails: BusService,private router: Router, private route : ActivatedRoute) {​​​​​​​ }​​​​​​​
  getUserInfo(mail:string): void{​​​​​​​
    this.userdetails.getData(mail).subscribe((data:IBooking)=>{​​​​​​​
      this.book = data;
      
    }​​​​​​​)
  }​​​​​​​

  ngOnInit(): void {
    const mail = this.route.snapshot.paramMap.get('email');
    console.log(mail);
    this.mail=mail;
    this.getUserInfo(mail);
  }

}
