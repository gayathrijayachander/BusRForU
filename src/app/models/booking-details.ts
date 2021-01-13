import { NumberSymbol, Time } from "@angular/common";
import {seatDetails} from "./seat-Details";
import {passangers} from "./passangers";

 export class bookingDetails{
   noOfPassengers:number =0;
   totalFare: number=0;
   Bus_Model:string="";
   Bus_id:number=0;
   Date:Date=null;
   Depart_Time:Time=null;
   Arrival_Time:Time=null;
   Total_Seats:number=0;
   No_of_available_seats:number=0;
   Fare:number=0;
   ExtraFeatures:string="";
   Source:string="";
   destination:string ="";
   selectedSeats:seatDetails[]=[];
   passangers:passangers[] = [];
}