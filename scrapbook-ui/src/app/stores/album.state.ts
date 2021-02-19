import { State, Action, StateContext, Selector, Select, Store } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile, SetPageError, CloseUpload, CloseLoading, OpenImageModal, OpenUploadingPanel } from '../actions/ui.actions';
import { OpenAlbumInfo, CloseAlbumInfo, FetchAllAlbums, FetchAllAlbumsOfUser, CreateAlbum, Upload, PutAlbumInView, RemoveAlbumFromView, GetImage, RemoveImage, DownloadImage, RemoveUploadPanel } from '../actions/album.actions';
import { AlbumService } from '../services/album.service';
import { tap, catchError, mergeMap } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Image, PendingUploadsState, UPLOAD_STATE, PendingUploadsStateInterface } from '../models/image.model';
import { UserState } from './user.state';
import { HttpErrorResponse } from '@angular/common/http';
import { of, from, throwError, forkJoin} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../services/image.service';
import { patch, updateItem } from '@ngxs/store/operators';




export class AlbumStateModel {
  albumInfoOpen: boolean;
  albumInfoModalData: Album | Image;
  imageInfoOpen: boolean;
  allAlbumsOfUser: Array<Album>;
  albumInView: Album;
  image: any;
  imgBlob: Blob;
  pendingUploads: Array<PendingUploadsStateInterface>;
}

@State<AlbumStateModel>({
  name: 'albumState',
  defaults: {
    albumInfoOpen: false,
    imageInfoOpen: false,
    albumInfoModalData: {},
    allAlbumsOfUser: [],
    albumInView: null,
    image: null,
    imgBlob: null,
    pendingUploads: []
  }
})
@Injectable()
export class AlbumState {
  constructor(public albumService: AlbumService, public store: Store, private sanitizer: DomSanitizer, public imageService: ImageService) {}

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

  @Selector()
  static getImageSrc(state: AlbumStateModel) {
    return state.image;
  }

  @Selector()
  static getUploadPanelPendingArray(state: AlbumStateModel) {
    return state.pendingUploads;
  }

  @Action(OpenAlbumInfo)
  openAlbumInfo({getState, setState}: StateContext<AlbumStateModel>, {albumId , type}: OpenAlbumInfo) {
    const state = getState();

    if (type) {
      setState({
        ...state,
        albumInfoOpen: true,
        albumInfoModalData: state.albumInView.images.find(a => a.id === albumId)
      });
    } else {
      setState({
        ...state,
        albumInfoOpen: true,
        albumInfoModalData: state.allAlbumsOfUser.find(a => a.id === albumId)
      });
    }

  }

  @Action(CloseAlbumInfo)
  closeAlbumInfo({getState, setState}: StateContext<AlbumStateModel>) {
    setState({
      ...getState(),
      albumInfoOpen: false
    });
  }
  @Action(FetchAllAlbumsOfUser)
  fetchAllAlbumsOfUser({getState, setState, dispatch}: StateContext<AlbumStateModel>, {id}: FetchAllAlbumsOfUser) {
    const state = getState();

    return this.albumService.getAlbumsOfUser(id).pipe(
      tap((response: Album[]) => {

        dispatch(new CloseLoading());
        setState({
           ...state,
           allAlbumsOfUser: response
         });
      })
    );
  }

  @Action(CreateAlbum)
  createAlbum({getState, setState, dispatch}: StateContext<AlbumStateModel>, {name, desc}: CreateAlbum) {
    const state = getState();
    const userid = this.store.selectSnapshot(UserState.getUserData)._id;
    return this.albumService.createAlbum(name, userid, desc).pipe(
      tap((response: Album) => {
        // response.images = []
        setState({
          ...state,
          allAlbumsOfUser: [...state.allAlbumsOfUser, response]
        });
      })
    );
  }

  @Action(Upload)
  uploadFiles({getState, setState, dispatch, patchState}: StateContext<AlbumStateModel>, {files, id}: Upload) {
    const userid = this.store.selectSnapshot(UserState.getUserData)._id;
    patchState({
      pendingUploads: []
    });
    dispatch(new OpenUploadingPanel());
    dispatch(new CloseUpload());


    const uploads: Array<PendingUploadsState> = [];
    files.forEach((file) => {
      uploads.push(new PendingUploadsState(file, file.name, UPLOAD_STATE.progress));
    });

    patchState({
      pendingUploads: uploads
    });

    const fetch$ = (obj) => {
      return this.albumService.uploadFile(obj.file, id, userid).pipe(
        tap(res => {
          setState(
            patch({
              pendingUploads: updateItem((i: PendingUploadsStateInterface) => i.name === obj.name, patch({...obj, status: UPLOAD_STATE.done}))
            })
          );
        }),
        catchError(error => {
          setState(
            patch({
              pendingUploads: updateItem((i: PendingUploadsStateInterface) => i.name === obj.name, patch({...obj, status: UPLOAD_STATE.fail}))
            })
          );
          console.log('err:', error.message, obj);
          return of(undefined);
        })
      );
    };

    forkJoin(uploads.map(fetch$)).subscribe(_ => {
      // setState({
      //   ...getState(),
      //   w
      // })
    });

  }


  @Action(PutAlbumInView)
  putAlbumInView({getState, setState, dispatch}: StateContext<AlbumStateModel>, {id}: PutAlbumInView) {
    const state = getState();
    const album = state.allAlbumsOfUser.find(a => a.id === id);
    const googleDriveId = album.googleDriveId;

    return this.albumService.getAllImagesOfAlbum(googleDriveId).pipe(
      tap((res: Image[]) => {
        setState({
          ...state,
          albumInView: {...album, images: res}
        });
      }),
      catchError((err) => {
        dispatch(new SetPageError('500'));
        return of('');
      })
    );
  }

  @Action(RemoveAlbumFromView)
  removeAlbumFromView({getState, setState, dispatch}: StateContext<AlbumStateModel>) {
    setState({
      ...getState(),
      albumInView: null
    });
  }

  @Action(GetImage)
  getImage({getState, setState, dispatch}: StateContext<AlbumStateModel>, {id}: GetImage) {
    const state = getState();
    dispatch(new OpenImageModal());
    dispatch(new RemoveImage());

    return this.albumService.getImage(id).pipe(
      tap((res) => {
        const blob = new Blob([res] );

        setState({
          ...state,
          imgBlob: blob,
          image: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob))
        });
      })
    );
  }

  @Action(RemoveImage)
  removeImage({getState, setState, dispatch}: StateContext<AlbumStateModel>) {
    setState({
      ...getState(),
      image: null,
      imgBlob: null
    });
  }

  @Action(DownloadImage)
  downloadImage({getState, setState, dispatch}: StateContext<AlbumStateModel>, {img, name}: DownloadImage) {
    const state = getState();
    this.imageService.downloadImage(img, name, state.imgBlob);
  }

  @Action(RemoveUploadPanel)
  removeUploadQueue({getState, setState, dispatch}: StateContext<AlbumStateModel>) {
    setState({
      ...getState(),
      pendingUploads: []
    });
  }
}
