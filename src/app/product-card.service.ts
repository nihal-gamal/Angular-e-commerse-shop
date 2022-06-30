import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  constructor(private HttpClient: HttpClient) {}
  id: any;
  products: Array<any> = [];
  prod = new BehaviorSubject(this.products);
  total: any = 0;
  getProducts(): Observable<Product[]> {
    return this.HttpClient.get<Product[]>('https://fakestoreapi.com/products');
  }
  getProductDetailById(id: number): Observable<any> {
    return this.HttpClient.get<any>(`https://fakestoreapi.com/products/${id}`);
  }
  addProduct(prod: Product) {
    let flag: boolean = false;
    this.products.forEach((e: any) => {
      console.log('ok');
      if (e.id == prod.id) {
        e.quantity++;
        flag = true;
      }
    });
    if (!this.products.length || !flag) {
      Object.assign(prod, { quantity: 1 });
      this.products.push(prod);
      this.prod.next(this.products);
      console.log(prod);
      this.getTotalPrice();
      console.log(this.products);
    }
  }
  getTotalPrice(): number {
    this.total = 0;
    this.products.forEach((e: any) => {
      this.total += e.quantity * e.price;
    });
    return this.total;
  }
  getProduct() {
    return this.prod.asObservable();
  }
  removeProduct(id: number): void {
    this.products.forEach((e) => {
      if (e.id == id) {
        const index = this.products.indexOf(e);
        this.products.splice(index, 1);
      }
    });
  }
}
