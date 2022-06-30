import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductCardService } from '../product-card.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  actionFromParent(data: any) {
    console.log(data, 'from Parent');
  }
  productList: Array<any> = [];
  constructor(private _productCardService: ProductCardService) {}

  ngOnInit(): void {
    this._productCardService.getProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.productList = res;
      },
      (err: any) => {
        console.log('error');
      }
    );
  }
}
