import { State, Action, StateContext, Selector, Select, Store } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core';
import { OpenProfile, CloseProfile, SetPageError, CloseUpload, CloseLoading, OpenImageModal, OpenUploadingPanel } from '../actions/ui.actions';
import { OpenAlbumInfo, CloseAlbumInfo, FetchAllAlbums, FetchAllAlbumsOfUser, CreateAlbum, Upload, PutAlbumInView, RemoveAlbumFromView, GetImage, RemoveImage, DownloadImage, RemoveUploadPanel, FetchImagesOfAlbum, DownloadAlbum } from '../actions/album.actions';
import { AlbumService } from '../services/album.service';
import { tap, catchError, mergeMap } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Image, PendingUploadsState, UPLOAD_STATE, PendingUploadsStateInterface } from '../models/image.model';
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
  openAlbumInfo({getState, setState}: StateContext<AlbumStateModel>, {data , type}: OpenAlbumInfo) {
    const state = getState();

    if (type) {
      setState({
        ...state,
        albumInfoOpen: true,
        albumInfoModalData: data
      });
    } else {
      setState({
        ...state,
        albumInfoOpen: true,
        albumInfoModalData: data
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
    const userid = localStorage.getItem('scrapbook-userid')
    return this.albumService.createAlbum(name, userid, desc).pipe(
      tap((response: Album) => {
        dispatch(new CloseLoading());
        setState({
          ...state,
          allAlbumsOfUser: [...state.allAlbumsOfUser, response]
        });
      })
    );
  }

  @Action(Upload)
  uploadFiles({getState, setState, dispatch, patchState}: StateContext<AlbumStateModel>, {files, id}: Upload) {
    const userid = localStorage.getItem('scrapbook-userid')
    patchState({
      pendingUploads: []
    });
    dispatch(new OpenUploadingPanel());
    dispatch(new CloseUpload());
    const albumInView = getState().albumInView;


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
            }),
           
          );

          setState({
            ...getState(),
            albumInView: {...albumInView, images: [...albumInView.images, res]}
          })
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
    return this.albumService.getAlbumByID(id).pipe(
      tap((res: Album) => {
        setState({
          ...state,
          albumInView: res
        })
        dispatch(new FetchImagesOfAlbum(res.googleDriveId))
      }),
      catchError((err) => {
        dispatch(new SetPageError('500'));
        return of(JSON.stringify(err));
      })
    )
  }

  @Action(FetchImagesOfAlbum)
  fetchImagesOfAlbum({getState, setState, dispatch}: StateContext<AlbumStateModel>, {googleDriveId}:FetchImagesOfAlbum) {
    const state = getState();
    const album = state.albumInView;
    return this.albumService.getAllImagesOfAlbum(googleDriveId).pipe(
        tap((res: Image[]) => {
          setState({
            ...state,
            albumInView: {...album, images: res}
          });
        }),
        catchError((err) => {
          dispatch(new SetPageError('500'));
          return of(JSON.stringify(err));
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

  @Action(DownloadAlbum)
  downloadAlbum({getState, setState, dispatch}: StateContext<AlbumStateModel>, {albums}: DownloadAlbum) {
    const state = getState();
    this.albumService.downloadAlbum(albums)
  }
}
