import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent implements OnInit {
  name;
  address;
  age;
  gender;
  email;
  formData;
  constructor() { }

  ngOnInit() {
    this.formData=new FormGroup({
      name: new FormControl('',Validators.maxLength(0)),
      address: new FormControl('',Validators.maxLength(0)),
      age: new FormControl('',Validators.compose([
        Validators.min(19),
        Validators.required
      ])),
      gender: new FormControl('',Validators.required),
      email: new FormControl('',Validators.compose([
        Validators.email,
        Validators.required
      ]))
    });
  }
  
  onSubmit(data){
    this.name=data.name;
    this.address=data.address;
    this.age=data.age;
    this.gender=data.gender;
    this.email=data.email;
  }
}
