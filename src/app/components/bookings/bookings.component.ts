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
  constructor(private userdetails: BusService,private router: Router, private route : ActivatedRoute) {​​​​​​​ }​​​​​​​
  getUserInfo(id:number): void{​​​​​​​
    this.userdetails.getData(id).subscribe((data:IBooking)=>{​​​​​​​
      this.book = data;
      
    }​​​​​​​)
  }​​​​​​​

  ngOnInit(): void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.getUserInfo(id);
  }

}
