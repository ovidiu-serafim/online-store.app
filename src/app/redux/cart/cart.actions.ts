import {createAction, props} from "@ngrx/store";
import { CartActionTypes } from "./cart.action-types";
import {Product} from "../../shared/models/product";

export const retrieveProductList = createAction(
  CartActionTypes.RETRIEVE_PRODUCT_LIST
);

export const addProduct = createAction(
  CartActionTypes.ADD_PRODUCT,
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  CartActionTypes.REMOVE_PRODUCT,
  props<{ product: Product }>()
);

export const incrementProductQuantity = createAction(
  CartActionTypes.INCREMENT_PRODUCT_QUANTITY,
  props<{ productId: string }>()
);

export const decrementProductQuantity = createAction(
  CartActionTypes.DECREMENT_PRODUCT_QUANTITY,
  props<{ productId: string }>()
);

export const computeTotalPrice = createAction(
  CartActionTypes.COMPUTE_TOTAL_PRICE,
  props<{ price: number}>()
);
