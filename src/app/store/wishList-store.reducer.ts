import { createReducer, on, props } from '@ngrx/store';
import { Product } from '../product';
import { addToWishList, deleteFromWishList } from './wishList-store.action';

export const initialState: Product[] = [];

export const wishListReducer = createReducer(
  initialState,

  on(addToWishList, (state, { productCard }) => {
    let add = state.filter((e) => e.id == productCard.id);
    if (add.length != 0) {
      return state;
    } else {
      return [...state, productCard];
    }
  }),
  on(deleteFromWishList, (state, { productCard }) => {
    state = state.filter((e) => e.id != productCard.id);
    return state;
  })
);
