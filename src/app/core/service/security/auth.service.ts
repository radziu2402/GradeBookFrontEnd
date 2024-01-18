import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, shareReplay, Subject, tap, throwError} from 'rxjs';
import {jwtDecode} from "jwt-decode";
import * as dayjs from "dayjs";
import {environment} from "../../../../environments/environment";
import {ROLES} from "../../const/constants";
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private sessionEvents$ = new Subject<string>();

  private readonly loginUrl = environment.api + 'login';
  private keyToken = 'jwt_token';

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post<Token>(this.loginUrl, { login: login, password: password })
      .pipe(
        tap((r: Token) => {
          this.setSession(r);
          this.showNotification('Zalogowano pomyślnie');
        }),
        shareReplay(),
        catchError((error) => {
          this.showNotification('Błąd logowania: Nieprawidłowe dane');
          return throwError(error);
        })
      );
  }

  showNotification(message: string) {
    this.snackBar.open(message, 'Zamknij', { duration: 3000 });
  }

  logout() {
    localStorage.removeItem(this.keyToken);
    void this.router.navigate(["login"])
  }
  isLoggedIn() {
    const expirationDate = this.getTokenExpirationDate();
    return expirationDate?.isValid() && dayjs().isBefore(expirationDate);
  }

  getRole(): ROLES {
    const token = this.getTokenPayload();
    return token?.role;
  }

  private setSession(token: Token) {
    localStorage.setItem(this.keyToken, token.accessToken);
    this.sessionEvents$.next(token.accessToken);
  }

  private getTokenExpirationDate() {
    const tokenPayload = this.getTokenPayload();
    const expirationDate = tokenPayload?.exp;

    return dayjs.unix(+expirationDate);
  }

  private getTokenPayload(): any {
    const token = localStorage.getItem(this.keyToken);
    let tokenPayload: any;

    if(!token) {
       return;
    }

    try {
      tokenPayload = jwtDecode(token);
    } catch (error) {
      console.log('Not parsable JWT');
      localStorage.removeItem(this.keyToken);
    }

    return tokenPayload;
  }
}

type Token = { accessToken: string };
