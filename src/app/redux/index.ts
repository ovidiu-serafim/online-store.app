import {ActionReducerMap, createFeatureSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {authFeatureKey, authReducer, AuthState} from './auth/auth.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {AppState} from "./app.state";
import {productReducer, productFeatureKey, ProductState } from "./product/product.reducer";
import {cartFeatureKey, cartReducer} from "./cart/cart.reducer";
import {Product} from "../shared/models/product";

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  router: routerReducer,
  product: productReducer,
  cart: cartReducer,
};

export const authState = createFeatureSelector<AuthState>(authFeatureKey);
export const routerState = createFeatureSelector<RouterReducerState>('router');
export const productState = createFeatureSelector<ProductState>(productFeatureKey);
export const cartState = createFeatureSelector<Product[]>(cartFeatureKey);

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
