import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile } from '../actions/ui.actions';

export class UIStateModel {
  profileOpen: boolean;
  notificationsOpen: boolean;
  accessRequestOpen: boolean;
  filterOpen: boolean;
}

@State<UIStateModel>({
  name: 'uiState',
  defaults: {
    profileOpen: false,
    notificationsOpen: false,
    accessRequestOpen: false,
    filterOpen: false
  }
})
@Injectable()
export class UIState {
  constructor() {}

  @Selector()
  static getProfileStatus(state: UIStateModel) {
    return state.profileOpen;
  }

  @Action(OpenProfile)
  openProfile({getState, setState}:StateContext<UIStateModel>) {
    setState({
      ...getState(),
      profileOpen: true
    })
  }

  @Action(CloseProfile)
  closeProfile({getState, setState}:StateContext<UIStateModel>) {
    setState({
      ...getState(),
      profileOpen: false
    })
  }

}