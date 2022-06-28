import {AuthState} from './auth/auth.reducer';
import {RouterState} from '@ngrx/router-store';
import {ProductState} from "./product/product.reducer";

export interface AppState {
  readonly auth: AuthState;
  readonly router: RouterState;
  readonly product: ProductState;
}
