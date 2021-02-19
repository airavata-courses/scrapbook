import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile, OpenUpload, CloseUpload, OpenFilters, CloseFilters, OpenLoading, CloseLoading, SetPageError, ClearPageError, OpenImageModal, CloseImageModal, OpenUploadingPanel, CloseUploadingPanel, OpenSettings, CloseSettings } from '../actions/ui.actions';
import { RemoveImage } from '../actions/album.actions';
import { PendingUploadsState } from "../models/image.model";

export class UIStateModel {
  profileOpen: boolean;
  notificationsOpen: boolean;
  accessRequestOpen: boolean;
  filterOpen: boolean;
  uploadOpen: boolean;
  error: boolean;
  loading: boolean;
  pageError: string;
  navigationStack: Array<string>;
  imageModalOpen: boolean;
  uploading: boolean;
  albumSettingsOpen: boolean;
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
    loading: false,
    pageError: '',
    navigationStack: [],
    imageModalOpen: false,
    uploading: false,
    albumSettingsOpen: false
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

  @Selector() 
  static getLoading(state: UIStateModel) {
    return state.loading;
  }

  @Selector() 
  static getPageErr(state: UIStateModel) {
    return state.pageError;
  }

  @Selector()
  static getImgModal(state: UIStateModel) {
    return state.imageModalOpen;
  }

  @Selector()
  static getUploadingPanelState(state: UIStateModel) {
    return state.uploading;
  }

  @Selector()
  static getSettingsState(state: UIStateModel) {
    return state.albumSettingsOpen;
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

  @Action(OpenLoading)
  openLoading({getState, setState}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      loading: true
    })
  }

  @Action(CloseLoading)
  closeLoading({getState, setState}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      loading: false
    })
  }

  @Action(SetPageError)
  setPageError({getState, setState}: StateContext<UIStateModel>, {err}: SetPageError) {
    setState({
      ...getState(),
      pageError: err
    })
  }

  @Action(ClearPageError)
  clearPageError({getState, setState}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      pageError: ''
    })
  }

  @Action(OpenImageModal)
  openImageModal({getState, setState, dispatch}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      imageModalOpen: true
    })
  }

  @Action(CloseImageModal)
  closeImageModal({getState, setState, dispatch}: StateContext<UIStateModel>) {
    dispatch(new RemoveImage());
    setState({
      ...getState(),
      imageModalOpen: false
    })
  }

  @Action(OpenUploadingPanel)
  openUploadingPanel({getState, setState, dispatch}: StateContext<UIStateModel>) {

    setState({
      ...getState(),
      uploading: true,
      uploadOpen: false,
    })
  }

  @Action(CloseUploadingPanel)
  closeUploadingPanel({getState, setState, dispatch}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      uploading: false,
    })
  }

  @Action(OpenSettings)
  openSettings({getState, setState, dispatch}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      albumSettingsOpen: true
    })
  }

  @Action(CloseSettings)
  closeSettings({getState, setState, dispatch}: StateContext<UIStateModel>) {
    setState({
      ...getState(),
      albumSettingsOpen: false
    })
  }
}