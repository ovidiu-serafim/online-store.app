export enum AuthActionTypes {
  LOGIN_REQUEST = '[Auth] Login request',
  LOGIN_REQUEST_SUCCESS = '[Auth] Login request success',
  LOGIN_REQUEST_FAILURE = '[Auth] Login request failure',

  LOGOUT_REQUEST = '[Auth] Logout request',
  LOGOUT_REQUEST_SUCCESS = '[Auth] Logout request success',
  LOGOUT_REQUEST_FAILURE = '[Auth] Logout request failure',

  USER_REQUEST = '[Auth] User request',
  USER_REQUEST_SUCCESS = '[Auth] User request success',
  USER_REQUEST_FAILURE = '[Auth] User request failure',

  LOAD_TOKEN_REQUEST = '[Auth] Load token',
  LOAD_TOKEN_REQUEST_SUCCESS = '[Auth] Load token success',
  LOAD_TOKEN_REQUEST_FAILURE = '[Auth] Load token failure',

  SET_STATUS = '[Auth] Set status',
}
