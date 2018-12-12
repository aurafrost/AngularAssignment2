import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {
  getCurrentDate(){
    return new Date();
  }
  constructor() { }
}
