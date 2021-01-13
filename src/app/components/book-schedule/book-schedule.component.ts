import { Component, OnInit, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { CommonServiceService } from '../../services/commonservice/common-service.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-book-schedule',
  templateUrl: './book-schedule.component.html',
  styleUrls: ['./book-schedule.component.sass']
})
export class BookScheduleComponent implements OnInit {
 
  seats: any[]
  seatsInArray: any[]
  selectedSeats: any[] = [];
  info: boolean = false;

  constructor(private renderer: Renderer2, private router: Router,private commonService: CommonServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.intializeSeatsInfo();
  }

  intializeSeatsInfo(): void
  {
     this.commonService.getAllSeatsDetails(this.commonService.bookingDetails.Bus_id)
                      .subscribe( data => {
                        this.seatsInArray = this.chunkArrayInGroups(data);
                      });
  }
  toggle(event:any, seat:any):void {
    
    if(!event.target.classList.contains('b-booked')){
      var seatCurrentStatus= {
        "id": seat.id,
        "bus_id": seat.bus_id,
        "seat_id": seat.seat_id, 
        "available": true 
      }
      if(event.target.classList.contains('b-selected')) {
        this.renderer.removeClass(event.target, 'b-selected')
        this.selectedSeats.splice(this.selectedSeats.indexOf(seatCurrentStatus), 1);
        this.commonService.bookingDetails.noOfPassengers--;
      }else {
        this.renderer.addClass(event.target, 'b-selected');
        console.log(seatCurrentStatus);
        this.selectedSeats.push(seatCurrentStatus);
        this.commonService.bookingDetails.noOfPassengers++;
        this.info = false;
      }
      
    }  
  
  }

  updateSeat()
    {
      this.commonService.bookingDetails.selectedSeats = this.selectedSeats;
      if(this.selectedSeats.length > 0)
      {
        this.router.navigate(['proceedbooking']); 
      }
      this.info = true;
      /*this.commonService.Putavailablity(this.selectedSeats).subscribe(()=>{
        this.router.navigate(['/finalizeBooking']);
      })*/
    }

    chunkArrayInGroups(arr:any[]): any[] {
      let myArray = [];
      let size = 4;
      for(var i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i+size));
      }
      return myArray;
    }
}