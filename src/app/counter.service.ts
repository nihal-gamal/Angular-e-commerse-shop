import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductCardService } from './product-card.service';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = new BehaviorSubject(0);

  constructor(private _productCardService: ProductCardService) {}
  setCount(count: number) {
    console.log(count);
    this.count.next(count++);
  }
  getCount() {
    return this.count.asObservable();
  }
}
