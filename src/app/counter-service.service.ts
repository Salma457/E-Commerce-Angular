import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  private counter = new BehaviorSubject<number>(0);//initial value

  constructor() { }
  //علشان اعمل سبسكرايب لازم يكون ال داتا الي هترجعلي نوعها اوبسيرفابل
  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(newCounter:number){
    // this.counter=newCounter;
    this.counter.next(newCounter)
  }
}
