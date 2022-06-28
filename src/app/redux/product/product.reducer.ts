import * as ProductActions from '../product/product.actions';
import {createReducer, on} from "@ngrx/store";
import {Product} from "../../shared/models/product";
import {setStatus} from "../helpers";
import {RequestStatusType} from "../../shared/enums";

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[];
  isLoading: boolean;
}

const initialState: ProductState = {
  products: [],
  isLoading: false
}

export const productReducer = createReducer(
  initialState,
  on(ProductActions.requestList, (state) => ({
    ...state,
    isLoading: true
  })),
  on(ProductActions.requestListSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    products: action.products
  })),
  on(ProductActions.requestListFailure, (state, action) => ({
    ...state,
    isLoading: false,
    status: setStatus(state, 'product', {
      type: RequestStatusType.ERROR,
      value: action.error
    })
  }))
);
