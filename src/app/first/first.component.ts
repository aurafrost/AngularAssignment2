import { Component, OnInit } from '@angular/core';
import { DatetimeService } from '../datetime.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name;
  address;
  age;
  date;
  constructor(private cs:DatetimeService) { }

  ngOnInit() {
    this.date=this.cs.getCurrentDate();
  }
  onSubmit(data){
    this.name=data.name;
    this.address=data.address;
    this.age=data.age;
  }
}
