import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile, OpenUpload, CloseUpload, OpenFilters, CloseFilters } from '../actions/ui.actions';

export class UIStateModel {
  profileOpen: boolean;
  notificationsOpen: boolean;
  accessRequestOpen: boolean;
  filterOpen: boolean;
  uploadOpen: boolean;
  error: boolean;
  loading: boolean;
}

@State<UIStateModel>({
  name: 'uiState',
  defaults: {
    profileOpen: false,
    notificationsOpen: false,
    accessRequestOpen: false,
    filterOpen: false,
    uploadOpen: false,
    error: false,
    loading: true
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

  @Selector() 
  static getFiltersStatus(state: UIStateModel) {
    return state.filterOpen;
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

  @Action(OpenFilters)
  openFilters({getState, setState}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      filterOpen: true
    })
  }

  @Action(CloseFilters)
  closeFilters({getState, setState}: StateContext<UIStateModel>) {
    // make service call to fetch data according to filters
    setState({
      ...getState(),
      filterOpen: false
    })
  }

}