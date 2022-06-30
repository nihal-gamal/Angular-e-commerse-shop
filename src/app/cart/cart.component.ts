import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../counter.service';
import { Product } from '../product';
import { ProductCardService } from './../product-card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  counter: number = 0;
  total: number = 0;
  cartProducts: Array<any> = [];
  constructor(
    private _counterService: CounterService,
    private _productCardService: ProductCardService
  ) {
    this._counterService.getCount().subscribe((res: any) => {
      this.counter = res;
      // console.log(res);
    });
    this._productCardService.getProduct().subscribe((data: any) => {
      this.cartProducts = data;
      this.total = this._productCardService.getTotalPrice();
    });
  }
  remove(id: number) {
    this._productCardService.removeProduct(id);
    this._counterService.setCount(this.counter - 1);
    this.total = this._productCardService.getTotalPrice();
  }
  increaseQuantity(id: number) {
    this._productCardService.products.forEach((e: any) => {
      if (e.id == id) {
        e.quantity++;
      }
    });
    // this._counterService.setCount(this.counter + 1);
    this.total = this._productCardService.getTotalPrice();
  }
  decreaseQuantity(id: number) {
    this._productCardService.products.forEach((e: any) => {
      if (e.id == id) {
        e.quantity--;
        if (e.quantity == 0) {
          this.remove(id);
        }
      }
    });
    // this._counterService.setCount(this.counter - 1);
    this.total = this._productCardService.getTotalPrice();
  }

  ngOnInit(): void {}
}
