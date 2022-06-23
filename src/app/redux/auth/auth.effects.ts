import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as AuthActions from './auth.actions';
import {AuthService} from '../../shared/services/auth.service';

@Injectable()
export class AuthEffects {
  loginRequest$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginRequest),
    mergeMap(({email, password}) => this.authService.login(email, password).pipe(
      switchMap((token) => [
        AuthActions.loginRequestSuccess({token}),
        AuthActions.userRequest()
      ]),
      catchError((error) => of(AuthActions.loginRequestFailure({error})))
    ))
  ));

  logoutRequest$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logoutRequest),
    mergeMap(() => this.authService.logout().pipe(
      map(() => AuthActions.logoutRequestSuccess()),
      catchError((error) => of(AuthActions.logoutRequestFailure({error})))
    ))
  ));

  tokenRequest$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.tokenRequest),
    mergeMap(() => of(this.authService.getToken()).pipe(
      map((token) => AuthActions.tokenRequestSuccess({token}))
    ))
  ));

  userRequest$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.userRequest),
    mergeMap(() => this.authService.getUser().pipe(
      map((user) => AuthActions.userRequestSuccess({data: user})),
      catchError((error) => of(AuthActions.userRequestFailure({error})))
    ))
  ));

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }
}
