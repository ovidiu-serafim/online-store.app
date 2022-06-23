import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./redux/app.state";
import * as AuthActions from './redux/auth/auth.actions';
import * as AuthSelectors from './redux/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(AuthActions.loginRequest({
      email: 'john@doe.com',
      password: '123456'
    }));

    this.store.select(AuthSelectors.getUser).subscribe(user => {
      console.log({user});
    });
  }
}
