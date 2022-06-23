import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getToken(): string | undefined {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    return token;
  }

  login(email: string, password: string): Observable<string> {
    return this.http.get<User[]>('/users', {}).pipe(
      map(users => users.find(user => user.email === email && user.password === password) ?? null),
      map(user => {
        if (!user) {
          throw {message: 'User not found'};
        }

        return `${user.email}%%access-token`;
      }),
      tap(token => this.saveToken(token))
    );
  }

  logout(): Observable<void> {
    return of(undefined).pipe(
      tap(() => this.deleteToken())
    );
  }

  getUser(): Observable<User> {
    if (!this.getToken()) {
      throw {message: 'Not authenticated'};
    }

    const email = this.getToken()?.split('%%', 2).shift();

    return this.http.get<User[]>('/users', {}).pipe(
      map(users => {
        const user = users.find(user => user.email === email);

        if (!user) {
          throw {message: 'User not found'};
        }

        return user;
      }),
      tap((user) => this.saveUserInSession(user))
    );
  }

  saveUserInSession(user: User | null): void {
    if (!user) {
      return;
    }

    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromSession(): User | undefined {
    const user = sessionStorage.getItem('user');

    if (!user) {
      return;
    }

    return JSON.parse(user);
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private deleteToken(): void {
    localStorage.removeItem('token');
  }
}
