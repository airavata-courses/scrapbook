import { State, Action, StateContext, Selector, Select, Store } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile, SetPageError, CloseUpload } from '../actions/ui.actions';
import { OpenAlbumInfo, CloseAlbumInfo, FetchAllAlbums, FetchAllAlbumsOfUser, CreateAlbum, Upload, PutAlbumInView } from '../actions/album.actions';
import { AlbumService } from '../services/album.service';
import { tap, catchError } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Image } from '../models/image.model';
import { UserState } from './user.state';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

export class AlbumStateModel {
  albumInfoOpen: boolean;
  albumInfoModalData: Album | Image;
  imageInfoOpen: boolean;
  allAlbumsOfUser: Array<Album>;
  albumInView: Album
}

@State<AlbumStateModel>({
  name: 'albumState',
  defaults: {
    albumInfoOpen: false,
    imageInfoOpen: false,
    albumInfoModalData: {},
    allAlbumsOfUser: [],
    albumInView: {}
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

  @Selector()
  static getAlbumInView(state: AlbumStateModel) {
    return state.albumInView;
  }

  @Action(OpenAlbumInfo)
  openAlbumInfo({getState, setState}: StateContext<AlbumStateModel>, {albumId ,type}:OpenAlbumInfo) {
    const state = getState();

    if (type) {
      setState({
        ...state,
        albumInfoOpen: true,
        albumInfoModalData: state.albumInView.images.find(a => a.id === albumId)
      })
    } else {
      setState({
        ...state,
        albumInfoOpen: true,
        albumInfoModalData: state.allAlbumsOfUser.find(a => a.id === albumId)
      })
    }
    
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
        // response.map(album => {
        //   album.images = []
        // })
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
      tap((response: Album) => {
        // response.images = []
        setState({
          ...state,
          allAlbumsOfUser: [...state.allAlbumsOfUser, response]
        })
      })
    )
  }

  @Action(Upload)
  uploadFiles({getState, setState, dispatch}: StateContext<AlbumStateModel>, {files, id, idx}: Upload) {
    const state = getState();
    const userid = this.store.selectSnapshot(UserState.getUserData)._id;
    
    return this.albumService.uploadFiles(files, id ,userid).pipe(
      tap((response: Image) => {
          dispatch(new CloseUpload());

          setState({
            ...state
          })
      }),
      catchError((err: HttpErrorResponse) => {
        // open snackbar
        // dispatch(new SetPageError(err.status.toString()))
        return of('')
      })
    )
  }
  

  @Action(PutAlbumInView)
  putAlbumInView({getState, setState, dispatch}: StateContext<AlbumStateModel>, {id}: PutAlbumInView) {
    const state = getState();
    setState({
      ...state,
      albumInView: state.allAlbumsOfUser.find(a => a.id === id)
    })
  }
  

}