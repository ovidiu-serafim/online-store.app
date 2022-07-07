import { createAction, props } from "@ngrx/store";
import { ProductActionTypes } from "./product.action-types";
import {Product} from "../../shared/models/product";

export const requestList = createAction(
  ProductActionTypes.REQUEST_LIST
);

export const requestListSuccess = createAction(
  ProductActionTypes.REQUEST_LIST_SUCCESS,
  props<{ products: Product[] }>()
);

export const requestListFailure = createAction(
  ProductActionTypes.REQUEST_LIST_FAILURE,
  props<{ error: any }>()
);

export const setFilterBy = createAction(
  ProductActionTypes.SET_FILTER_BY,
  props<{filters: string[], query: string }>()
);
