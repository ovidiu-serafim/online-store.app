import {createAction, props} from "@ngrx/store";
import { CartActionTypes } from "./cart.action-types";

export const retrieveProductList = createAction(
  CartActionTypes.RETRIEVE_PRODUCT_LIST
);

export const addProduct = createAction(
  CartActionTypes.ADD_PRODUCT,
  props<{ productId: string }>()
);

export const removeProduct = createAction(
  CartActionTypes.REMOVE_PRODUCT,
  props<{ productId: string }>()
);

