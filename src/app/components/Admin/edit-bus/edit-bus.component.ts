import { Component, OnInit } from '@angular/core';
import { IBus } from 'src/app/Models/iadmin';
import {BusServiceService} from 'src/app/services/Busservice/bus.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { IEdit } from 'src/app/Models/iedit';


@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.sass']
})
export class EditBusComponent implements OnInit {

  bus : IEdit;
  constructor(private busservice: BusServiceService,private router: Router,private route : ActivatedRoute) { }

    ngOnInit(): void {​​​​​​​
      const id = + this.route.snapshot.paramMap.get('id');
      this.getBusInfo(id);
    }​​​​​​​
    saveBus(bus : IEdit): void {​​​​​​​
      this.bus=bus;
      this.editbus(); 
    }​​​​​​​
    getBusInfo(id:number): void{​​​​​​​
      this.busservice.getData(id).subscribe((data:IEdit)=>{​​​​​​​
        this.bus = data;
      }​​​​​​​)
    }​​​​​​​
    
  editbus() {​​​​​​​
    this.busservice.editbus(this.bus).subscribe(
      ( )=> {​​​​​​​
        alert("Recorded Edited");
        this.router.navigate(['/pro']);
      }​​​​​​​
    );
  }​​​​​​​  

}
