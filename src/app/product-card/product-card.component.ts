import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { CounterService } from '../counter.service';
import { Product } from '../product';
import { ProductCardService } from '../product-card.service';
import { addToWishList } from './../store/wishList-store.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Output() messageFromChild = new EventEmitter<string>();
  @Input() inputData: any;
  currentCounter: number = 0;
  quantity: number = 0;
  sendDeta(prod: Product) {
    console.log('clicked');
    this.messageFromChild.emit('hello');
    this._cunterService.setCount(this.currentCounter + 1);
    this._productCardService.addProduct(prod);
  }
  addToWishListCart() {
    this.store.dispatch(addToWishList({ productCard: this.inputData }));
  }
  constructor(
    private _cunterService: CounterService,
    private _productCardService: ProductCardService,
    private store: Store<{ wishList: Product[] }>
  ) {
    this._cunterService.getCount().subscribe((res: any) => {
      this.currentCounter = res;
    });
  }

  ngOnInit(): void {}
}
