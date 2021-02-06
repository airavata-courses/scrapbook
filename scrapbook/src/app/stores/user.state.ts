import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile } from '../actions/ui.actions';
import { FetchUserData } from '../actions/user.actions';

export class UserStateModel {
  userData: any
}

@State<UserStateModel>({
  name: 'userState',
  defaults: {
    userData: {},

  }
})
@Injectable()
export class UserState {
  constructor() {}

  @Selector()
  static getUserData(state: UserStateModel) {
    return state.userData;
  }

  @Action(FetchUserData)
  fetchUserData({getState, setState}: StateContext<UserStateModel>, {id}: FetchUserData) {
    // make call 
    setState({
      ...getState(),
      userData: {
        name: 'Hrishikesh Paul',
        photo: '',
        id: '1',
        email: 'hrpaul@iu.edu'
      }
    })
  }



}