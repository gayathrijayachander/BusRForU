import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { IBus } from 'src/app/Models/iadmin';
import {BusServiceService} from 'src/app/services/Busservice/bus.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.sass']
})

export class AddBusComponent implements OnInit {

  bus : IBus ={
    Bus_Model :null,
    Date : null,
    Depart_Time  :null,
    Arrival_Time: null,
    Total_Seats : null,
    No_of_available_seats : null,
    Fare : null,
    ExtraFeatures : null,
    Source : null,
    destination :null, 
  };
  
  
  constructor(private busservice: BusServiceService,private router: Router ) { }

addbus() {
  this.busservice.addbus(this.bus).subscribe(
    ( )=> {
      alert("Recorded Added");
      this.router.navigate(['/list']);
    }
  );
}

savebus(bus : IBus): void {
  this.bus=bus;
  this.addbus();
}

  onSubmit(bus :NgForm) {
    console.log(bus.value);
    console.log(bus.valid);
  }

  ngOnInit(): void {
  }

}
