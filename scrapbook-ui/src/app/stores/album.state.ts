import { State, Action, StateContext, Selector, Select, Store } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile } from '../actions/ui.actions';
import { OpenAlbumInfo, CloseAlbumInfo, FetchAllAlbums, FetchAllAlbumsOfUser, CreateAlbum, Upload } from '../actions/album.actions';
import { AlbumService } from '../services/album.service';
import { tap } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Image } from '../models/image.model';
import { UserState } from './user.state';

export class AlbumStateModel {
  albumInfoOpen: boolean;
  albumInfoModalData: Album | Image;
  imageInfoOpen: boolean;
  allAlbumsOfUser: Array<Album>;
}

@State<AlbumStateModel>({
  name: 'albumState',
  defaults: {
    albumInfoOpen: false,
    imageInfoOpen: false,
    albumInfoModalData: {},
    allAlbumsOfUser: []
  }
})
@Injectable()
export class AlbumState {
  constructor(public albumService: AlbumService, public store: Store) {}

  @Selector()
  static getInfoModalState(state: AlbumStateModel) {
    return state.albumInfoOpen;
  }

  @Selector()
  static getAlbumnInfoModalData(state: AlbumStateModel) {
    return state.albumInfoModalData;
  }

  @Selector()
  static getAllAlbumsOfUser(state: AlbumStateModel) {
    return state.allAlbumsOfUser;
  }

  @Action(OpenAlbumInfo)
  openAlbumInfo({getState, setState}: StateContext<AlbumStateModel>, {albumId}:OpenAlbumInfo) {
    const state = getState();
    
    setState({
      ...state,
      albumInfoOpen: true,
      albumInfoModalData: state.allAlbumsOfUser.find(a => a.id === albumId)
    })
  }

  @Action(CloseAlbumInfo)
  closeAlbumInfo({getState, setState}: StateContext<AlbumStateModel>) {
    setState({
      ...getState(),
      albumInfoOpen: false
    })
  }
  @Action(FetchAllAlbumsOfUser)
  fetchAllAlbumsOfUser({getState, setState}: StateContext<AlbumStateModel>, {id}: FetchAllAlbumsOfUser) {
    const state = getState();

    return this.albumService.getAlbumsOfUser(id).pipe(
      tap((response: Album[]) => {
         setState({
           ...state,
           allAlbumsOfUser: response
         })
      })
    )
  }

  @Action(CreateAlbum)
  createAlbum({getState, setState, dispatch}: StateContext<AlbumStateModel>, {name}: CreateAlbum) {
    const state = getState();
    const userid = this.store.selectSnapshot(UserState.getUserData)._id;
    return this.albumService.createAlbum(name, userid).pipe(
      tap((response) => {
        setState({
          ...state,
          allAlbumsOfUser: [...state.allAlbumsOfUser, response]
        })
      })
    )
  }

  @Action(Upload)
  uploadFiles({getState, setState, dispatch}: StateContext<AlbumStateModel>, {files, id}: Upload) {
    const state = getState();
    const userid = this.store.selectSnapshot(UserState.getUserData)._id;
    
    return this.albumService.uploadFiles(files, id ,userid).pipe(
      tap((response) => {
        console.log(response)
      })
    )
  }

}