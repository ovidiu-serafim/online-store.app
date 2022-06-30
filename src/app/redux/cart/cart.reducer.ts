import {createReducer, on} from "@ngrx/store";
import {Product} from "../../shared/models/product";
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';


export const initialState: Product[] = [];


export const cartReducer = createReducer(
  initialState,
  on(CartActions.retrieveProductList, (state) => ({
    ...state,
  })),
  on(CartActions.addProduct, (state, action) => {
    return [...state, action.product];
  }),
  on(CartActions.removeProduct, (state, action) => state.filter((product) => product !== action.product))
);
