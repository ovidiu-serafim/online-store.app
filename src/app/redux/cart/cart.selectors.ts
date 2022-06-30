import { createSelector } from '@ngrx/store';
import { cartState } from "../index";

export const getCartProducts = createSelector(cartState, state => state);
