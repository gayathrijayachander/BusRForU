import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBus } from 'src/app/models/ibus';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  bus:IBus={from:null,to:null,traveldate:null}
  

  constructor(private http:HttpClient) {​​​​​​​ }​​​​​​​

  ngOnInit(): void {
  }

}
