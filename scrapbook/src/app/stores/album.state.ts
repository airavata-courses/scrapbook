import { State, Action, StateContext, Selector, Select } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile } from '../actions/ui.actions';
import { OpenAlbumInfo, CloseAlbumInfo } from '../actions/album.actions';

export class AlbumStateModel {
  albumInfoOpen: boolean;
  imageInfoOpen: boolean;
}

@State<AlbumStateModel>({
  name: 'albumState',
  defaults: {
    albumInfoOpen: false,
    imageInfoOpen: false
  }
})
@Injectable()
export class AlbumState {
  constructor() {}

  @Selector()
  static getInfoModalState(state: AlbumStateModel) {
    return state.albumInfoOpen;
  }

  @Action(OpenAlbumInfo)
  openAlbumInfo({getState, setState}: StateContext<AlbumStateModel>, {albumId}:OpenAlbumInfo) {
    setState({
      ...getState(),
      albumInfoOpen: true
    })
  }

  @Action(CloseAlbumInfo)
  closeAlbumInfo({getState, setState}: StateContext<AlbumStateModel>) {
    setState({
      ...getState(),
      albumInfoOpen: false
    })
  }

}