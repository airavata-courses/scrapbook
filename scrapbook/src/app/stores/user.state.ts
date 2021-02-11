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

import { UIState } from './ui.state';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

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

  constructor(public router: Router, public userService: UserService, public gas: AuthService) {
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
    this.gas.loginWithGoogle();
  }

  @Action(PutUserInSession)
  putUserIntoSession({ setState, getState }: StateContext<UserStateModel>, { user }: PutUserInSession) {
    let loggedInUser: User = {
      name: user.name,
      token: user.idToken,
      email: user.email,
      photo: user.photoUrl,
      id: user.id,
    };
    localStorage.setItem('scrapbook-token', loggedInUser.token);
    
    setState({
      ...getState(),
      userData: loggedInUser,
    })
  }

  @Action(Logout)
  logoutUser({ setState, getState, dispatch }: StateContext<UserStateModel>) {
    // this.authService.signOut()
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
