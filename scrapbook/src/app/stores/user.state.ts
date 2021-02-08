import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject, NgZone } from '@angular/core';
import { OpenProfile, CloseProfile } from '../actions/ui.actions';
import {
  FetchUserData,
  GoogleLogin,
  PutUserInSession,
  Logout,
} from '../actions/user.actions';
import { User } from '../models/user.model';
import { StateReset } from 'ngxs-reset-plugin';

import { SocialAuthService } from 'angularx-social-login';
import {
  GoogleLoginProvider,
} from 'angularx-social-login';

import { UIState } from './ui.state';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class UserStateModel {
  userData: any;
}

@State<UserStateModel>({
  name: 'userState',
  defaults: {
    userData: {},
  },
})
@Injectable()
export class UserState {
  private zone: NgZone

  constructor(private authService: SocialAuthService, public router: Router, public userService: UserService) {
  }

  @Selector()
  static getUserData(state: UserStateModel) {
    return state.userData;
  }

  @Selector()
  static getUserToken(state: UserStateModel){
    return state.userData.token;
  }

  @Action(GoogleLogin)
  googleLogin({ dispatch, setState, getState, patchState }: StateContext<UserStateModel>) {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    
  }

  @Action(PutUserInSession)
  putUserIntoSession({ setState, getState }: StateContext<UserStateModel>, { user }: PutUserInSession) {
    let u: User = {
      name: user.name,
      token: user.authToken,
      email: user.email,
      photo: user.photoUrl,
      id: user.id,
    };
    localStorage.setItem('scrapbook-token', u.token);
    
    setState({
      ...getState(),
      userData: u,
    })
  }

  @Action(Logout)
  logoutUser({ setState, getState, dispatch }: StateContext<UserStateModel>) {
    this.authService.signOut()
    localStorage.setItem('scrapbook-token', '');
    dispatch(new StateReset(UIState))
    setState({
      ...getState(),
      userData: {}
    })
  }

  @Action(FetchUserData)
  fetchUserData({ setState, getState, dispatch }: StateContext<UserStateModel>, {email}:FetchUserData) {
    // make call
    return this.userService.fetchUserData(email).pipe(
      tap((res: any) => {

      }),
      catchError((e) => {
        return of('')
      })
    )
  }
}
