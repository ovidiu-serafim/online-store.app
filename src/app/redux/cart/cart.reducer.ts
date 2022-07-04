import {createReducer, on} from "@ngrx/store";
import {Product} from "../../shared/models/product";
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface CartState {
  products: Product[];
}

export const initialState: CartState = {
  products: []
}

export const cartReducer = createReducer(
  initialState,
  on(CartActions.retrieveProductList, (state) => ({
    ...state,
  })),
  on(CartActions.addProduct, (state, action) => ({
    ...state,
    products:  [
      ...state.products,
      action.product
    ]
  })),
  on(CartActions.removeProduct, (state, action) => ({
    ...state,
    products: [
      ...state.products.filter((product) => product !== action.product)
    ]
  }))
);
