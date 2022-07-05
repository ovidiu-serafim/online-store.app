import {createAction, createReducer, on} from "@ngrx/store";
import {Product} from "../../shared/models/product";
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface CartState {
  products: Product[];
  totalPrice: number;
}

export const initialState: CartState = {
  products: [],
  totalPrice: 0
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
      ...state.products.filter((product) => product !== action.product),
    ]
  })),
  on(CartActions.incrementProductQuantity, (state, payload) => {
    const productIndex = state.products.findIndex((product) => product.id === payload.productId);

    const newProducts = [...state.products];
    const oldProduct = newProducts[productIndex];
    newProducts[productIndex] = {
      ...oldProduct,
      quantity: oldProduct.quantity + 1
    };

    return {
      ...state,
      products: newProducts
    };
  }),
  on(CartActions.decrementProductQuantity, (state, payload) => {
    const productIndex = state.products.findIndex((product) => product.id === payload.productId);

    const newProducts = [...state.products];
    const oldProduct = newProducts[productIndex];

    if(oldProduct.quantity > 0){
      newProducts[productIndex] = {
        ...oldProduct,
        quantity: oldProduct.quantity - 1
      };
    }

    return {
      ...state,
      products: newProducts
    };
  }),
  on(CartActions.computeTotalPrice, (state, payload) => ({
    ...state,
    totalPrice: state.totalPrice + payload.price
  }))
);
