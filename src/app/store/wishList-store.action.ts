import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const addToWishList = createAction(
  '[WishList Component] AddToWishList',
  props<{ productCard: Product }>()
);
export const deleteFromWishList = createAction(
  '[WishList Component] DeleteFromWishList',
  props<{ productCard: Product }>()
);
