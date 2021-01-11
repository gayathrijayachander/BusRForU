import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICust } from 'src/app/models/icust';
import { BusService } from 'src/app/services/search/bus.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.sass']
})
export class BuslistComponent implements OnInit {

  buslist : any[];
  
  constructor(private busservice:BusService,private router:ActivatedRoute) { }
  
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
    const from = this.router.snapshot.paramMap.get("from");
    const to=this.router.snapshot.paramMap.get('to');
    const traveldate=new Date(this.router.snapshot.paramMap.get('traveldate'));
    this.getbusinfo(from,to,traveldate);
  }

}
