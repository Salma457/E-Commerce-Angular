import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterServiceService } from '../counter-service.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counter:number=0;
  counterService=inject(CounterServiceService);

  ngOnInit(){
    this.counterService.getCounter().subscribe((response)=>{
      this.counter=response;
      // console.log(this.counter);
    });
  }

}
