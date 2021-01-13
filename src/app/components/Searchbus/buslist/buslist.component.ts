import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ICust } from 'src/app/models/icust';
import { BusService } from 'src/app/services/search/bus.service';
import {CommonServiceService} from '../../../services/commonservice/common-service.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.sass']
})
export class BuslistComponent implements OnInit {

  buslist : any[];
  busid : number;
  
  constructor(private busservice:BusService,private router:Router, private commonService : CommonServiceService, private route : ActivatedRoute) { }
  
  getbusinfo(from:string,to:string,traveldate:Date){

    console.log("/n");
    console.log("inside get businfo date="+traveldate)
    this.busservice.getBuslist(from,to,traveldate).subscribe((data)=>{
      this.buslist=data;console.log(data);
    }
    
    )
    console.log("inside get businfo date="+from)
  }
  ngOnInit(): void {
    const from = this.route.snapshot.paramMap.get("from");
    const to=this.route.snapshot.paramMap.get('to');
    const traveldate=new Date(this.route.snapshot.paramMap.get('traveldate'));
    this.getbusinfo(from,to,traveldate);
  }
  onClick(id):void{
    this.getBus(id);
    console.log("selected bus id "+ id);
   }

   getBus(id):void{
    this.commonService.getBusDetails(id)
      .subscribe( (data) => {
        this.updateBusDetailsInCommonService(data);
        this.router.navigateByUrl("/bookschedule");
      });
  }
  updateBusDetailsInCommonService(data){
    this.commonService.bookingDetails.Bus_Model  = data.Bus_Model;
    this.commonService.bookingDetails.Depart_Time  = data.Depart_Time;
    this.commonService.bookingDetails.ExtraFeatures  = data.ExtraFeatures;
    this.commonService.bookingDetails.Fare  = data.Fare;
    this.commonService.bookingDetails.Total_Seats  = data.Total_Seats;
    this.commonService.bookingDetails.Source  = data.Source;
    this.commonService.bookingDetails.destination  = data.destination;
    this.commonService.bookingDetails.Arrival_Time = data.Arrival_Time;
    this.commonService.bookingDetails.Bus_id=data.Bus_Id;

    console.log(data);
    console.log(this.commonService.bookingDetails);
    console.log("----------dfsdf-------");
  }
}
