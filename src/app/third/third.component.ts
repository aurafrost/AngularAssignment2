import { Component, OnInit } from '@angular/core';
import { DatetimeService } from '../datetime.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  date;
  name;
  address;
  city;
  
  constructor(private cs:DatetimeService) { }

  ngOnInit() {
    this.date=this.cs.getCurrentDate();
  }
  onSubmit(data){
    this.name=data.name;
    this.address=data.address;
    this.city=data.city;
  }
}
