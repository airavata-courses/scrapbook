import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile, OpenUpload, CloseUpload } from '../actions/ui.actions';

export class UIStateModel {
  profileOpen: boolean;
  notificationsOpen: boolean;
  accessRequestOpen: boolean;
  filterOpen: boolean;
  uploadOpen: boolean;
}

@State<UIStateModel>({
  name: 'uiState',
  defaults: {
    profileOpen: false,
    notificationsOpen: false,
    accessRequestOpen: false,
    filterOpen: false,
    uploadOpen: false
  }
})
@Injectable()
export class UIState {
  constructor() {}

  @Selector()
  static getProfileStatus(state: UIStateModel) {
    return state.profileOpen;
  }

  @Selector()
  static getUploadModalStatus(state: UIStateModel) {
    return state.uploadOpen;
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

  @Action(OpenUpload)
  openUpload({getState, setState}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      uploadOpen: true
    })
  }

  @Action(CloseUpload)
  closeUpload({getState, setState}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      uploadOpen: false
    })
  }

}