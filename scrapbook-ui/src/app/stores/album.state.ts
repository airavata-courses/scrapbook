import { State, Action, StateContext, Selector, Select, Store } from '@ngxs/store';
import { Injectable, Inject, NgZone } from '@angular/core';
import { OpenProfile, CloseProfile, SetPageError, CloseUpload, CloseLoading, OpenImageModal, OpenUploadingPanel, OpenLoading, CloseSettings } from '../actions/ui.actions';
import { OpenAlbumInfo, CloseAlbumInfo, FetchAllAlbums, FetchAllAlbumsOfUser, CreateAlbum, Upload, PutAlbumInView, RemoveAlbumFromView, GetImage, RemoveImage, DownloadImage, RemoveUploadPanel, FetchImagesOfAlbum, DownloadAlbum, SelectMultipleImages, RemoveSelectedImage, DownloadSelectedImages, DeleteSelectedImages, RemoveAllSelectedImages, AddAlbumCollaborator, RemoveAlbumCollaborator, EditAlbumSettings, StartAlbumLoading, CloseAlbumLoading, RenameImage, DeleteImages, RemoveImageForAlbum, DeleteAlbum, GetSharedAlbumsOfUser , SearchAndFilterAlbums, SearchAndFilterImages, ClearSearchText} from '../actions/album.actions';
import { AlbumService } from '../services/album.service';
import { tap, catchError, mergeMap } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Image, PendingUploadsState, UPLOAD_STATE, PendingUploadsStateInterface } from '../models/image.model';
import { of, from, throwError, forkJoin} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../services/image.service';
import { patch, updateItem } from '@ngxs/store/operators';
import { User } from '../models/user.model';
import { RemoveSearchedUserBySubString } from '../actions/user.actions';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Filters } from '../models/search.model';

export class AlbumStateModel {
  albumInfoOpen: boolean;
  albumInfoModalData: Album | Image;
  imageInfoOpen: boolean;
  allAlbumsOfUser: Array<Album>;
  albumInView: Album;
  image: any;
  imgBlob: Blob;
  pendingUploads: Array<PendingUploadsStateInterface>;
  selectedImages: Array<Image>;
  collaborators: Array<User[]>;
  loading: boolean;
  filters: any;
  searchText: string;
  imageFilters: any;
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
    pendingUploads: [],
    selectedImages: [],
    collaborators: [],
    loading: true,
    filters: null,
    searchText: null,
    imageFilters: null
  }
})
@Injectable()
export class AlbumState {
  constructor(public albumService: AlbumService, public store: Store, private sanitizer: DomSanitizer, public imageService: ImageService, private ngZone:NgZone, private location: Location, private router: Router) {}

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

  @Selector()
  static getSelectedImageState(state: AlbumStateModel) {
    return state.selectedImages;
  }

  @Selector()
  static getAlbumLoading(state: AlbumStateModel) {
    return state.loading;
  }

  @Selector()
  static getFilters(state: AlbumStateModel) {
    return state.filters;
  }

  @Selector()
  static getSearchText(state: AlbumStateModel) {
    return state.searchText;
  }

  @Selector()
  static getImageFilters(state: AlbumStateModel) {
    return state.imageFilters;
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
    dispatch(new StartAlbumLoading());
    return this.albumService.getAlbumsOfUser(id).pipe(
      tap((response: Album[]) => {

        dispatch(new CloseLoading());
        setState({
           ...state,
           allAlbumsOfUser: response,
           loading: false
         });
      }),
      catchError((err) => {
        console.log(err)
        // dispatch(new SetPageError('401'));
        return of(JSON.stringify(err))
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
    let albumInView = getState().albumInView;


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
          albumInView = getState().albumInView;
          if(albumInView) {
            setState({
              ...getState(),
              albumInView: {...albumInView, images: [...albumInView.images, res]}
            })
          }
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
    });

  }


  @Action(PutAlbumInView)
  putAlbumInView({getState, setState, dispatch}: StateContext<AlbumStateModel>, {id}: PutAlbumInView) {
    const state = getState();
    dispatch(new StartAlbumLoading());
    return this.albumService.getAlbumByID(id).pipe(
      tap((res: Album) => {
        if(!res.active) {
          this.location.back()
        }
        setState({
          ...state,
          albumInView: res,
        })
        dispatch(new FetchImagesOfAlbum(res.googleDriveId));     
         
      }),
      catchError((err) => {
        dispatch(new SetPageError('401'));
        return of(JSON.stringify(err))
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
            selectedImages: [],
            albumInView: {...album, images: res}
          });
          dispatch(new CloseAlbumLoading());
          dispatch(new CloseLoading());
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
    dispatch(new OpenLoading());
    this.albumService.downloadAlbum(albums)
  }

  @Action(SelectMultipleImages)
  selectmultipleImages({getState, setState, dispatch}: StateContext<AlbumStateModel>, {image}:SelectMultipleImages) {
    const state = getState();
    setState({
      ...state,
      selectedImages: [...state.selectedImages, image]
    })
  }

  @Action(RemoveSelectedImage)
  removeSelectedImage({getState, setState, dispatch}: StateContext<AlbumStateModel>, {image}:SelectMultipleImages) {
    const state = getState();
    setState({
      ...state,
      selectedImages: state.selectedImages.filter(i => i.id !== image.id)
    })
  }

  @Action(DownloadSelectedImages)
  downloadSelectedImages({getState, setState, dispatch}: StateContext<AlbumStateModel>,) {
    const state = getState();
    const selectedImages = state.selectedImages;
    this.imageService.downloadMultipleImages(selectedImages, state.albumInView)
  }

  @Action(DeleteSelectedImages)
  deleteSelectedImages({getState, setState, dispatch}: StateContext<AlbumStateModel>,) {
    const state = getState();
    const selectedImages = state.selectedImages;
    
    // this.imageService.downloadMultipleImages(selectedImages)
  }

  @Action(RemoveAllSelectedImages)
  removeAllSelectedImages({getState, setState, dispatch}: StateContext<AlbumStateModel>,) {
    const state = getState();
    setState({
      ...state,
      selectedImages: []
    })
    
    // this.imageService.downloadMultipleImages(selectedImages)
  }

  @Action(AddAlbumCollaborator)
  addCollaborator({getState, setState, dispatch}: StateContext<AlbumStateModel>, {collabUser, owner}: AddAlbumCollaborator) {
    const state = getState();
    return this.albumService.addCollaborator(collabUser._id, owner._id, state.albumInView.googleDriveId).pipe(
      tap((res: Album) => {
        dispatch(new RemoveSearchedUserBySubString())
        setState({
          ...state,
          albumInView: {...state.albumInView, collaborators: res.collaborators}
        })
      }),
      catchError((err) => {
        return of(JSON.stringify(err))
      })
    )
  }

  @Action(RemoveAlbumCollaborator)
  removeCollaborator({getState, setState, dispatch}: StateContext<AlbumStateModel>, {collabUser, owner}: RemoveAlbumCollaborator) {
    const state = getState();
    return this.albumService.removeCollaborator(collabUser._id, owner._id, state.albumInView.googleDriveId).pipe(
      tap((res: Album) => {
        setState({
          ...state,
          albumInView:  {...state.albumInView, collaborators: res.collaborators}
        })
      }),
      catchError((err) => {
        return of(JSON.stringify(err))
      })
    )
  }

  @Action(EditAlbumSettings)
  editAlbumSettings({getState, setState, dispatch}: StateContext<AlbumStateModel>, {name, desc}: EditAlbumSettings) {
    dispatch(new OpenLoading())
    const state = getState();
    const uid = state.albumInView.createdBy._id;
    const gid = state.albumInView.googleDriveId;
    return this.albumService.editAlbumSettings(name, desc, uid, gid).pipe(
      tap((res: Album) => {
        dispatch(new CloseLoading())
        setState({
          ...state,
          albumInView: {...state.albumInView, name: res.name, description: res.description}
        })
      }),
      catchError((err) => {
        return of(JSON.stringify(err))
      })
    )
  }

  @Action(StartAlbumLoading)
  startAlbumLoading({getState, setState, dispatch}: StateContext<AlbumStateModel>) {
    const state = getState();
    setState({
      ...state,
      loading: true
    })
  }

  @Action(CloseAlbumLoading)
  stopAlbumLoading({getState, setState, dispatch}: StateContext<AlbumStateModel>) {
    const state = getState();
    setState({
      ...state,
      loading: false
    })
  }

  @Action(RenameImage)
  renameImage({getState, setState, dispatch}: StateContext<AlbumStateModel>, {name, imgid}:RenameImage) {
    const state = getState();
    const images = [...state.albumInView.images];
    const userid = localStorage.getItem('scrapbook-userid');
    dispatch(new OpenLoading());
    const idx = images.findIndex(i => i.googleDriveId === imgid);

    return this.imageService.renameImage(userid, imgid, name).pipe(
      tap((res: Image) => {
        setState({
          ...state,
          albumInView: {...state.albumInView, images: [...images.slice(0, idx),res, ...images.slice(idx + 1)]}
        })
        dispatch(new CloseLoading())
        
      }),
      catchError((err) => {
        dispatch(new CloseLoading())
        return of(JSON.stringify(err))
      })
    )
  }

  @Action(DeleteImages)
  deleteImages({getState, setState, dispatch}: StateContext<AlbumStateModel>, {images, albumid}:DeleteImages) {
    const state = getState();
    dispatch(new OpenLoading());
    const userid = localStorage.getItem('scrapbook-userid');
    this.imageService.deleteImages(images, userid, albumid);
  }

  @Action(SearchAndFilterAlbums)
  searchAndFilterAlbums({getState, setState, dispatch, patchState}: StateContext<AlbumStateModel>, {searchText, payload}: SearchAndFilterAlbums) {
    dispatch(new OpenLoading());
    const state = getState();
    let objPayload = {
      filters: payload === null ? payload : state.filters,
      searchText: searchText === null ? searchText : state.searchText
    }

    if(searchText === null) {
      objPayload.filters = payload;
      objPayload.searchText = state.searchText
    }

    if(payload === null) {
      objPayload.searchText = searchText;
      objPayload.filters = state.filters;
    }

    const id = localStorage.getItem('scrapbook-userid');

    return this.albumService.searchAndFilterAlbums({...objPayload.filters, name: objPayload.searchText}, id)
    .pipe(
      tap((response: Album[]) => {
        dispatch(new CloseLoading());
        setState({
           ...state,
           allAlbumsOfUser: response,
           loading: false,
           filters: payload ? payload : state.filters,
          searchText: searchText ? searchText : state.searchText
         });
      }),
      catchError((err) => {
        console.log(err)
        // dispatch(new SetPageError('401'));
        return of(JSON.stringify(err))
      })
    );
  }

  @Action(SearchAndFilterImages)
  searchAndFilterImages({getState, setState, dispatch, patchState}: StateContext<AlbumStateModel>, {searchText, payload}: SearchAndFilterImages) {
    dispatch(new StartAlbumLoading());
    const state = getState();
    let objPayload = {
      filters: payload ? payload : state.filters,
      searchText: searchText ? searchText : state.searchText
    }

    if(searchText === null) {
      objPayload.filters = payload;
      objPayload.searchText = state.searchText
    }

    if(payload === null) {
      objPayload.searchText = searchText;
      objPayload.filters = state.filters;
    }

    const id = localStorage.getItem('scrapbook-userid');
    const googledriveid = state.albumInView.googleDriveId;

    return this.albumService.searchAndFilterImages({...objPayload.filters, name: objPayload.searchText}, id, googledriveid)
    .pipe(
      tap((response: any) => {
        dispatch(new CloseLoading());
        setState({
           ...state,
           loading: false,
           albumInView: {...state.albumInView, images: response},
           filters: payload ? payload : state.filters,
           searchText: searchText ? searchText : state.searchText
         });
      }),
      catchError((err) => {
        console.log(err)
        // dispatch(new SetPageError('401'));
        return of(JSON.stringify(err))
      })
    );
  }

  @Action(DeleteAlbum)
  deleteAlbum({getState, setState, dispatch}: StateContext<AlbumStateModel>, {albumid}:DeleteAlbum) {
    const state = getState();
    dispatch(new OpenLoading());
    const userid = localStorage.getItem('scrapbook-userid');
    return this.albumService.deleteAlbum(albumid, userid).pipe(
      tap((res) => {
        setState({
          ...state,
          albumInView: {},
          selectedImages: []
        })
        dispatch(new CloseSettings());
        this.ngZone.run(() => this.router.navigate(['/home']));
      }),
      catchError((err) => {
        return of(JSON.stringify(err))
      })
    )
  }

  @Action(GetSharedAlbumsOfUser)
  fetchSharedAlbumsofUser({getState, setState, dispatch}: StateContext<AlbumStateModel>) {
    const state = getState();
    const id = localStorage.getItem('scrapbook-userid')
    dispatch(new StartAlbumLoading());
    return this.albumService.getSharedAlbumsOfUser(id).pipe(
      tap((response: Album[]) => {
        setState({
           ...state,
           allAlbumsOfUser: response,
           loading: false
         });
      }),
      catchError((err) => {
        console.log(err)
        // dispatch(new SetPageError('401'));
        return of(JSON.stringify(err))
      })
    );
  }

  @Action(ClearSearchText)
  clearSearchText({getState, setState, dispatch}: StateContext<AlbumStateModel>) {
    setState({
      ...getState(),
      searchText: null,
      filters: null
    })
  }

}
