import { Component, OnInit } from '@angular/core';
import { IAdmin} from 'src/app/Models/iadmin';
import {BusServiceService} from 'src/app/services/Busservice/bus.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { IEdit } from 'src/app/Models/iedit';

@Component({
  selector: 'app-delete-bus',
  templateUrl: './delete-bus.component.html',
  styleUrls: ['./delete-bus.component.sass']
})
export class DeleteBusComponent implements OnInit {
bus : IEdit;
  constructor(private busservice: BusServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(bus: IEdit){​​ this.bus = bus; this.deleteBus(); }​​

  deleteBus(){​​ this.busservice.deletebus(this.bus.Bus_Id).subscribe(() => {​​alert("Deleted Bus Record Successfully");}​​) }​​

}
