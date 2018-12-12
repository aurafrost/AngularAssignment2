import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  msg;
  constructor() { }

  ngOnInit() { }
  onSubmit(data){
    if(data.age>18){
      this.msg="age is greater than 18";
    }
    else{
      this.msg="not eligible";
    }
  }
}
