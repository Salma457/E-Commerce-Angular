import { Component } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';
import { CommonModule } from '@angular/common';
import { ProductsRequestService } from '../products-request.service';
// import { inject } from '@angular/core/testing';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  counter : number = 0;
  constructor(private activatedRoute:ActivatedRoute,private counterService : CounterServiceService, private productService: ProductsRequestService){}

  @Input() id:string='';
  product:any;

  ngOnInit(){
    this.counterService.getCounter().subscribe((response)=>{
      this.counter=response;
      console.log(this.counter);
    })
    this.productService.getProductDetails(this.id).subscribe((response)=>{
      this.product=response;
    },(err)=>console.log(err));
  }

  decreseCounter(){
    this.counterService.setCounter(this.counter-1);
  }
  increaseCounter(){
    this.counterService.setCounter(this.counter+1);
  }
  // removeProduct(productId:string) {
  //   this.product = this.product.filter((produc:)=>{
  //     return produc.id !== productId;
  //   })
  //   this.counterService.setCounter(0); // ✅ تصفير العداد
  //   console.log(`تمت إزالة المنتج ID: ${productId} من السلة`);  }
}
