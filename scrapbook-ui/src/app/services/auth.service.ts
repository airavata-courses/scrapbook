import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Store } from '@ngxs/store';
import { PutUserInSession, Logout } from '../actions/user.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public googleAuthService: SocialAuthService, public store: Store, public router: Router) {
    this.googleAuthService.authState.subscribe(user => {
      console.log(user)
        store.dispatch(new PutUserInSession(user)).subscribe(_ => {
          router.navigate(['/home'])
        })
    })
   }

  loginWithGoogle() {
    this.googleAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  lougoutFromGoogle() {
    this.googleAuthService.signOut();
    localStorage.removeItem('scrapbook-token');
    this.store.dispatch(new Logout()).subscribe(_ => {
      this.router.navigate(['/'])
    })
  }
}
