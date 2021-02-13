import { Injectable, NgZone } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Store } from '@ngxs/store';
import { PutUserInSession, Logout } from '../actions/user.actions';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GATEWAY_URL } from '../static/url';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public googleAuthService: SocialAuthService, public store: Store, public router: Router, public http: HttpClient, private ngZone: NgZone) {
    
  }

  initGoogleLogin() {
    this.googleAuthService.authState.subscribe(
      (user) => {
        const {name, photoUrl, idToken, email } = user;

        this.logUserIn({name: name, photo: photoUrl, token: idToken, email: email}).toPromise().then( (user: any) => {
          this.store.dispatch(new PutUserInSession(user));
          this.ngZone.run(() => this.router.navigate(['/home']));
        })
      }
    )
  }

  logUserIn(user: User) {
    return this.http.post(`${GATEWAY_URL}/login`, user)
  }

  loginWithGoogle() {
    this.initGoogleLogin();
    this.googleAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  lougoutFromGoogle() {
    this.googleAuthService.signOut();
    localStorage.removeItem('scrapbook-token');
    this.store.dispatch(new Logout()).subscribe(_ => {
      this.router.navigate(['/'])
    })
  }
}