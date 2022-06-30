import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { deleteFromWishList } from '../store/wishList-store.action';
import { Product } from './../product';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  wishArray: Product[] = [];
  constructor(private store: Store<{ wishList: Product[] }>) {}
  deleteItem(wishArrayItem: any) {
    this.store.dispatch(deleteFromWishList({ productCard: wishArrayItem }));
  }

  ngOnInit(): void {
    this.store.pipe(select((state: any) => state.wishList)).subscribe((res) => {
      this.wishArray = res;
    });
  }
}
