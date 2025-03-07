import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productlist from "/home/iti/angular/task3/day3/public/assets/products.json";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productList=productlist;
  // constructor(private activatedRoute:ActivatedRoute){}

@Input() id :string='';
product:any;
ngOnChanges(){
  console.log(this.id)
}
  ngOnInit(){
    // console.log(this.activatedRoute.snapshot.params['id'])
    console.log(this.id)
  this.product=this.productList.find(product=>product.id===Number(this.id));
  console.log(this.product)
  }


  getFullStars(rating: number): number[] {
    return new Array(Math.floor(rating));
  }

  getHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }

  getEmptyStars(rating: number): number[] {
    return new Array(5 - Math.ceil(rating));
  }


}
