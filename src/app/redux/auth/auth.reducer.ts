import {createReducer, on} from '@ngrx/store';
import {RequestStatus, User} from '../../shared/models';
import * as AuthActions from '../auth/auth.actions';
import {setStatus} from '../helpers';
import {RequestStatusType} from '../../shared/enums';

export const authFeatureKey = 'auth';

export interface AuthState {
  token?: string;
  user?: User;
  status: RequestStatus;
}

const initialState: AuthState = {
  status: {}
};

export const authReducer = createReducer(
  initialState,

  // Login
  on(AuthActions.loginRequest, (state) => ({
    ...state,
    status: setStatus(state, 'login', {
      type: RequestStatusType.LOADING
    })
  })),
  on(AuthActions.loginRequestFailure, (state, action) => ({
    ...state,
    status: setStatus(state, 'login', {
      type: RequestStatusType.ERROR,
      value: action.error
    })
  })),
  on(AuthActions.loginRequestSuccess, (state, action) => ({
    ...state,
    token: action.token,
    status: setStatus(state, 'login', {
      type: RequestStatusType.SUCCESS
    })
  })),

  // Logout
  on(AuthActions.logoutRequest, (state) => ({
    ...state,
    status: setStatus(state, 'logout', {
      type: RequestStatusType.LOADING
    })
  })),
  on(AuthActions.logoutRequestFailure, (state, action) => ({
    ...state,
    status: setStatus(state, 'logout', {
      type: RequestStatusType.ERROR,
      value: action.error
    })
  })),
  on(AuthActions.logoutRequestSuccess, (state, action) => ({
    ...state,
    user: undefined,
    token: undefined,
    status: setStatus(state, 'logout', {
      type: RequestStatusType.SUCCESS
    })
  })),

  // User
  on(AuthActions.userRequest, (state) => ({
    ...state,
    status: setStatus(state, 'user', {
      type: RequestStatusType.LOADING
    })
  })),
  on(AuthActions.userRequestFailure, (state, action) => ({
    ...state,
    status: setStatus(state, 'user', {
      type: RequestStatusType.ERROR,
      value: action.error
    })
  })),
  on(AuthActions.userRequestSuccess, (state, action) => ({
    ...state,
    user: action.data,
    status: setStatus(state, 'user', {
      type: RequestStatusType.SUCCESS
    })
  })),

  // Token
  on(AuthActions.tokenRequest, (state) => ({
    ...state,
    status: setStatus(state, 'token', {
      type: RequestStatusType.LOADING
    })
  })),

  on(AuthActions.tokenRequestSuccess, (state, action) => ({
    ...state,
    token: action.token,
    status: setStatus(state, 'token', {
      type: RequestStatusType.SUCCESS
    })
  })),

  on(AuthActions.tokenRequestFailure, (state, action) => ({
    ...state,
    status: setStatus(state, 'token', {
      type: RequestStatusType.ERROR,
      value: action.error
    })
  })),

  // Status
  on(AuthActions.setStatus, (state, action) => ({
    ...state,
    status: action.data
  })),
);

