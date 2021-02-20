import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject, NgZone } from '@angular/core';
import { OpenProfile, CloseProfile, SetPageError } from '../actions/ui.actions';
import {
  FetchUserData,
  GoogleLogin,
  PutUserInSession,
  Logout,
} from '../actions/user.actions';
import { User } from '../models/user.model';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

export class UserStateModel {
  userData: any;
  loggedIn: boolean;
}

@State<UserStateModel>({
  name: 'userState',
  defaults: {
    userData: {},
    loggedIn: false
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

  @Selector()
  static getLoggedInState(state: UserStateModel) {
    return state.loggedIn;
  }

  @Action(GoogleLogin)
  googleLogin({ dispatch, setState, getState, patchState }: StateContext<UserStateModel>) {
    this.gas.loginWithGoogle();
  }

  @Action(PutUserInSession)
  putUserIntoSession({ setState, getState }: StateContext<UserStateModel>, { user }: PutUserInSession) {
    const loggedInUser: User = {
      name: user.name,
      email: user.email,
      photo: user.photo,
      token: user.token,
      _id: user._id,
    };
    localStorage.setItem('scrapbook-token', loggedInUser.token);
    localStorage.setItem('scrapbook-userid', loggedInUser._id);

    setState({
      ...getState(),
      userData: loggedInUser,
      loggedIn: true
    });
  }

  @Action(Logout)
  logoutUser({ setState, getState, dispatch }: StateContext<UserStateModel>) {
    localStorage.setItem('scrapbook-token', '');
    localStorage.setItem('scrapbook-userid', '');
    // dispatch(new StateReset(UIState));
    // // dispatch(new StateReset(AlbumState));
    // dispatch(new StateReset(UIState));
    setState({
      ...getState(),
      userData: {},
      loggedIn: false
    });
  }

  @Action(FetchUserData)
  fetchUserData({ setState, getState, dispatch }: StateContext<UserStateModel>, {email}: FetchUserData) {
    // make call
    return this.userService.fetchUserData(email).pipe(
      tap((res: any) => {
        console.log(res);
      }),
      catchError((e) => {
        if (e.status === 401) {
          dispatch(new SetPageError('401'));
        } else if (e.status === 500) {
          dispatch(new SetPageError('500'));
        } else {
          dispatch(new SetPageError('500'));
        }
        return of('');
      })
    );
  }
}
