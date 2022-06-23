import {createAction, props} from '@ngrx/store';
import {AuthActionTypes} from './auth.action-types';
import {RequestStatus, User} from '../../shared/models';

// Login
export const loginRequest = createAction(
  AuthActionTypes.LOGIN_REQUEST,
  props<{ email: string, password: string }>()
);

export const loginRequestSuccess = createAction(
  AuthActionTypes.LOGIN_REQUEST_SUCCESS,
  props<{ token: string }>()
);

export const loginRequestFailure = createAction(
  AuthActionTypes.LOGIN_REQUEST_FAILURE,
  props<{ error: any }>()
);

// Logout
export const logoutRequest = createAction(
  AuthActionTypes.LOGOUT_REQUEST
);

export const logoutRequestSuccess = createAction(
  AuthActionTypes.LOGOUT_REQUEST_SUCCESS
);

export const logoutRequestFailure = createAction(
  AuthActionTypes.LOGOUT_REQUEST_FAILURE,
  props<{ error: any }>()
);

// Token
export const tokenRequest = createAction(
  AuthActionTypes.LOAD_TOKEN_REQUEST
);

export const tokenRequestSuccess = createAction(
  AuthActionTypes.LOAD_TOKEN_REQUEST_SUCCESS,
  props<{ token?: string }>()
);

export const tokenRequestFailure = createAction(
  AuthActionTypes.USER_REQUEST_FAILURE,
  props<{ error: any }>()
);

// User
export const userRequest = createAction(
  AuthActionTypes.USER_REQUEST
);

export const userRequestSuccess = createAction(
  AuthActionTypes.USER_REQUEST_SUCCESS,
  props<{ data: User }>()
);

export const userRequestFailure = createAction(
  AuthActionTypes.USER_REQUEST_FAILURE,
  props<{ error: any }>()
);

// Status
export const setStatus = createAction(
  AuthActionTypes.SET_STATUS,
  props<{ data: RequestStatus }>()
);
