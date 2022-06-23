import {AuthState} from './auth/auth.reducer';
import {RouterState} from '@ngrx/router-store';

export interface AppState {
  readonly auth: AuthState;
  readonly router: RouterState;
}
