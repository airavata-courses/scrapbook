import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject, NgZone } from '@angular/core';
import { OpenProfile, CloseProfile, SetPageError } from '../actions/ui.actions';
import {
  FetchUserData,
  GoogleLogin,
  PutUserInSession,
  Logout,
  SearchUserBySubstring,
  RemoveSearchedUserBySubString,
} from '../actions/user.actions';
import { User } from '../models/user.model';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StateReset } from 'ngxs-reset-plugin';
import { AlbumState } from './album.state';
import { UIState } from './ui.state';

export class UserStateModel {
  userData: any;
  loggedIn: boolean;
  searchedUsers: Array<User>;
}

@State<UserStateModel>({
  name: 'userState',
  defaults: {
    userData: {},
    loggedIn: false,
    searchedUsers: []
  },
})
@Injectable()
export class UserState {

  constructor(public router: Router, public userService: UserService, public gas: AuthService, private ngZone: NgZone) {
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

  @Selector()
  static getSearchedUser(state: UserStateModel) {
    return state.searchedUsers;
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
    localStorage.setItem('scrapbook-userid', loggedInUser._id);
    localStorage.setItem('scrapbook-name', loggedInUser.name);
    localStorage.setItem('scrapbook-email', loggedInUser.email);
    localStorage.setItem('scrapbook-photo', loggedInUser.photo);

    setState({
      ...getState(),
      userData: loggedInUser,
      loggedIn: true
    });
  }

  @Action(Logout)
  logoutUser({ setState, getState, dispatch }: StateContext<UserStateModel>) {
    // dispatch(new StateReset(UIState));
    
    return this.gas.lougoutFromGoogle().pipe(
      tap((res) => {
        localStorage.removeItem('scrapbook-userid')
        localStorage.removeItem('scrapbook-name')
        localStorage.removeItem('scrapbook-email')
        localStorage.removeItem('scrapbook-photo')
        dispatch(new StateReset(AlbumState));
        dispatch(new StateReset(UIState));
        this.ngZone.run(() => this.router.navigate(['/']));

      })
    )
    // setState({
    //   ...getState(),
    //   userData: {},
    //   loggedIn: false
    // });
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

  @Action(SearchUserBySubstring)
  searchUserBySub({ setState, getState, dispatch }: StateContext<UserStateModel>, {sub}: SearchUserBySubstring) {
    const state = getState();
    return this.userService.fetchUsersBySubstring(sub).pipe(
      tap((res: User[]) => {
        setState({
          ...state,
          searchedUsers: res
        })
      }),
      catchError((err) => {
        return of('no users found');
      })
    )
  }

  @Action(RemoveSearchedUserBySubString)
  removeSearchedUserBySubString({ setState, getState, dispatch }: StateContext<UserStateModel>) {
    const state = getState();
    setState({
      ...state,
      searchedUsers: []
    })
  }
}
