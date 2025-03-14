import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  private counter = new BehaviorSubject<number>(this.getSavedCounter());//initial value

  constructor() { }
  private getSavedCounter(): number {
    return Number(localStorage.getItem('cartCounter')) || 0;
  }
  //علشان اعمل سبسكرايب لازم يكون ال داتا الي هترجعلي نوعها اوبسيرفابل
  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(newCounter:number){
    // this.counter=newCounter;
    this.counter.next(newCounter);
    localStorage.setItem('cartCounter', newCounter.toString());

  }
}
