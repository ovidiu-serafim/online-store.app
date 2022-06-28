import * as CartActions from '../cart/cart.actions';
import {createReducer, on} from "@ngrx/store";
import {Product} from "../../shared/models/product";

export const cartFeatureKey = 'cart';

export interface CartState {
  products: Product[];
  isLoading: boolean;
}

const initialState: CartState = {
  products: [],
  isLoading: false
}

export const cartReducer = createReducer(
  initialState,
  on(CartActions.retrieveProductList, (state, action) => ({
    ...state,
    isLoading: false,
    products: action.products
  })),
  on(CartActions.addProduct, (state, action) => ({
    ...state,
    isLoading: true,
    productId: action.productId
  }))
);
