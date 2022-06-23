import {ActionReducerMap, createFeatureSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {authFeatureKey, authReducer, AuthState} from './auth/auth.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {AppState} from "./app.state";

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  router: routerReducer
};

export const authState = createFeatureSelector<AuthState>(authFeatureKey);
export const routerState = createFeatureSelector<RouterReducerState>('router');

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
