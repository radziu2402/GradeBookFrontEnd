import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, shareReplay, Subject, tap} from "rxjs";
import {jwtDecode} from "jwt-decode";
import * as dayjs from "dayjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private sessionEvents = new Subject<string>();

  private readonly loginUrl = 'login';
  private readonly logoutUrl = 'logout';
  private keyToken = 'jwt_token';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<Token>(this.loginUrl, {username: username, password: password})
      .pipe(tap((r: Token) => this.setSession(r)), shareReplay());
  }

  isLoggedIn() {
    const expirationDate = this.getTokenExpirationDate();
    return expirationDate?.isValid() && dayjs().isBefore(expirationDate);
  }

  private setSession(token: Token) {
    localStorage.setItem(this.keyToken, token.accessToken);
    this.sessionEvents.next(token.accessToken);
  }

  private getTokenExpirationDate() {
    const tokenPayload = this.getTokenPayload();
    const expirationDate = tokenPayload?.exp;

    return dayjs.unix(+expirationDate);
  }

  private getTokenPayload(): any {
    const token = localStorage.getItem(this.keyToken);
    let tokenPayload;

    if(!token) {
       return;
    }

    try {
      tokenPayload = jwtDecode(token);
    } catch (error) {
      console.log('Unparsable JWT');
      localStorage.removeItem(this.keyToken);
    }

    return tokenPayload;
  }

}

export  type Token = { accessToken: string };
