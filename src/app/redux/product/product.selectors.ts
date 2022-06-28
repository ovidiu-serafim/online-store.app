import { createSelector } from '@ngrx/store';
import { productState } from "../index";

export const getProducts = createSelector(productState, state => state.products);
