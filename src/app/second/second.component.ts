import { Component, OnInit } from '@angular/core';
import { DatetimeService } from '../datetime.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  studentNames=["Joe","Tracy","Bill","Kel","Fi","Fo","Fum","Rhea","Phil","Otto"];
  date;
  constructor(private cs:DatetimeService) { }

  ngOnInit() {
    this.date=this.cs.getCurrentDate();
  }

}
