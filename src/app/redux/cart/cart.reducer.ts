import {createReducer, on} from "@ngrx/store";
import {Product} from "../../shared/models/product";
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface CartState {
  products: Product[],
  isLoading: boolean,
}

const initialState: CartState = {
  products: [],
  isLoading: false,
}

export const cartReducer = createReducer(
  initialState,
  on(CartActions.retrieveProductList, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(CartActions.addProduct, (state, action) => ({
    ...state,
    isLoading: false,
    productId: action.productId
  })),
  on(CartActions.removeProduct, (state, action) => ({
    ...state,
    isLoading: false,
    productId: action.productId
  }))
);
