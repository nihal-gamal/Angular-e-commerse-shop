import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { ProductCardService } from './../product-card.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  productList: Array<Product> = [];
  currentCounter: number = 0;
  product: any;
  id: any;
  @Input() inputData: any;
  sendDeta(prod: Product) {
    console.log('clicked');

    this._cunterService.setCount(this.currentCounter + 1);
    this._productCardService.addProduct(prod);
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private _productCardService: ProductCardService,
    private _cunterService: CounterService
  ) {
    this._cunterService.getCount().subscribe((res: any) => {
      this.currentCounter = res;
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this._productCardService
      .getProductDetailById(this.id)
      .subscribe((prod: any) => {
        this.product = prod;
        console.log(prod);
      });
  }
}
