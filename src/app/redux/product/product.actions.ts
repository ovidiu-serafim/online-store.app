import { createAction, props } from "@ngrx/store";
import { ProductActionTypes } from "./product.action-types";
import {Product} from "../../shared/models/product";

export const requestList = createAction(
  ProductActionTypes.REQUEST_LIST,
  props<{ data: Product[] }>()
);
