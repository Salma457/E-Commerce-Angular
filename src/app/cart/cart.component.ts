import { Component } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';
import { CommonModule } from '@angular/common';
import { ProductsRequestService } from '../products-request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private activatedRoute:ActivatedRoute,private counterService : CounterServiceService, private productService: ProductsRequestService){}
  cart:any[]=[];

  ngOnInit() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
    this.updateCartCounter();
  }
  removeProduct(productId: number) {
    this.cart = this.cart.filter((product) => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartCounter();

  }
  updateQuantity(productId: number, change: number) {
    const product = this.cart.find((p) => p.id === productId);
    if (product) {
      product.quantity += change;
      if (product.quantity <= 0) {
        this.removeProduct(productId);
      } else {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    }
    this.updateCartCounter();
  }
  updateCartCounter() {
    const totalQuantity = this.cart.reduce((total, product) => total + product.quantity, 0);
    this.counterService.setCounter(totalQuantity);
  }
  getTotalPrice(): number {
    return this.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  }

}
