import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject, NgZone } from '@angular/core';
import { OpenProfile, CloseProfile, SetPageError, CloseLoading, OpenLoading } from '../actions/ui.actions';
import {
  FetchUserData,
  GoogleLogin,
  PutUserInSession,
  Logout,
  SearchUserBySubstring,
  RemoveSearchedUserBySubString,
  SignUp,
  CustomLogin,
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
  signUpSuccess: boolean;
  signUpError: string;
  signInError: string;
}

@State<UserStateModel>({
  name: 'userState',
  defaults: {
    userData: {},
    loggedIn: false,
    searchedUsers: [],
    signUpSuccess: false,
    signUpError: '',
    signInError: ''
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

  @Selector()
  static getSignUpSuccess(state: UserStateModel) {
    return state.signUpSuccess;
  }

  @Selector()
  static getSignUpError(state: UserStateModel) {
    return state.signUpError;
  }

  @Selector()
  static getSignInError(state: UserStateModel) {
    return state.signInError;
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
      loggedIn: true,
      signInError: '',
      signUpSuccess: false
    });

    this.ngZone.run(() => this.router.navigate(['/home']));

  }

  @Action(Logout)
  logoutUser({ setState, getState, dispatch }: StateContext<UserStateModel>) {
    // dispatch(new StateReset(UIState));
    dispatch(new StateReset(AlbumState));
    dispatch(new StateReset(UIState));
    return this.gas.lougoutFromGoogle().pipe(
      tap((res) => {
        localStorage.removeItem('scrapbook-userid')
        localStorage.removeItem('scrapbook-name')
        localStorage.removeItem('scrapbook-email')
        localStorage.removeItem('scrapbook-photo')
        
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

  @Action(SignUp)
  onSignup({ setState, getState, dispatch }: StateContext<UserStateModel>, {email, password, name}:SignUp) {
    dispatch(new OpenLoading());
    const state = getState();
    return this.userService.onSignup(email, password, name).pipe(
      tap((res) => {
        dispatch(new CloseLoading());
        setState({
          ...state,
          signUpSuccess: true,
          signUpError: ''
        })
      }),
      catchError((err) => {
        dispatch(new CloseLoading());
        setState({
          ...state,
          signUpSuccess: false,
          signUpError: JSON.stringify(err.error)
        })
        // this.error = JSON.stringify(err);
        return of(JSON.stringify(err))
      })
    )
  }

  @Action(CustomLogin)
  onCustomLogin({ setState, getState, dispatch }: StateContext<UserStateModel>, {email, password}: CustomLogin) {
    dispatch(new OpenLoading());
    const state = getState();
    return this.userService.onCustomLogin(email, password).pipe(
      tap((user: any) => {
        dispatch(new CloseLoading());
        const u = {
          name: user.name,
          email: user.email,
          photo: user.photo,
          token: user._id,
          _id: user._id,
        };

        dispatch(new PutUserInSession(u));
        
      }),
      catchError((err) => {
        dispatch(new CloseLoading());
        setState({
          ...state,
          signInError: JSON.stringify(err.error)
        })
        // this.error = JSON.stringify(err);
        return of(JSON.stringify(err))
      })
    )
  }
}
