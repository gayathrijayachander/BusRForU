import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
 
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }


  onSubmit(f :NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

  ngOnInit(): void {
  }

}
