import { Component, OnInit } from '@angular/core';
import { AlbumViewService } from './album-view.service';
import { Album } from 'src/app/models/album.model';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { PutAlbumInView, OpenAlbumInfo, GetImage, DownloadImage, DownloadSelectedImages, SelectMultipleImages, RemoveSelectedImage, RemoveAllSelectedImages, EditAlbumSettings, RenameImage, DeleteImages, DeleteAlbum, ClearSearchText } from 'src/app/actions/album.actions';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UIState } from 'src/app/stores/ui.state';
import { ImageModalComponent } from 'src/app/components/image-modal/image-modal.component';
import { CloseImageModal, CloseSettings, OpenProfile, OpenSettings, OpenLoading, OpenCollaborators } from 'src/app/actions/ui.actions';
import { Image } from 'src/app/models/image.model';
import { SettingsComponent } from 'src/app/components/settings/settings.component';

import { faShareAlt, faInfoCircle, faCog, faDownload, faTrash, faTimes, faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  album: Album;
  faShareAlt = faShareAlt;
  faInfoCircle = faInfoCircle;
  faCog = faCog;
  faDownload = faDownload;
  faTrash = faTrash;
  faTimes = faTimes;
  faSync = faSyncAlt;
  selectedImages: Array<Image>;
  currentuUserid: string;

  @Select(AlbumState.getAlbumInView) albumInView$: Observable<Album>;
  @Select(UIState.getImgModal) imgModal$: Observable<boolean>;
  @Select(UIState.getSettingsState) settings$: Observable<boolean>;
  @Select(AlbumState.getSelectedImageState) selectedImages$: Observable<Array<Image>>;
  @Select(AlbumState.getAlbumLoading) albumLoading$: Observable<boolean>;

  constructor(public albumViewService: AlbumViewService, public router: Router, public store: Store, public dialog: MatDialog) {
    
    this.store.dispatch(new ClearSearchText());
    const splitRoute = router.url.split('/');
    const albumId = splitRoute[splitRoute.length - 1];

    this.currentuUserid = localStorage.getItem('scrapbook-userid');

    this.store.dispatch(new PutAlbumInView(albumId));

    this.albumInView$.subscribe(data => {
      if (data) {
        this.album = data;
      }
    });

    this.settings$.subscribe((status) => {
      if (status) { this.openSettingsModal(); }
      else { this.closeSettingsModal(); }
    });

    this.selectedImages$.subscribe((data) => {
      if (data) {
        this.selectedImages = data;
      }
    })
  }

  ngOnInit(): void {
  }

  onSync() {
    this.store.dispatch(new ClearSearchText());
    const splitRoute = this.router.url.split('/');
    const albumId = splitRoute[splitRoute.length - 1];

    this.currentuUserid = localStorage.getItem('scrapbook-userid');

    this.store.dispatch(new PutAlbumInView(albumId));
  }

  onCollab() {
    this.store.dispatch(new OpenCollaborators());
  }

  onRemoveAllSelections() {
    this.store.dispatch(new RemoveAllSelectedImages())
  }

  onImageSelect(data) {
    if (data.value) {
      this.store.dispatch(new SelectMultipleImages(data.image))
    } else {
      this.store.dispatch(new RemoveSelectedImage(data.image))
    }
  }

  onMultipleImageDelete() {
    Swal.fire({
      title: 'Are you sure you want to delete the selected images?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#EB7373',
      cancelButtonColor: '#85C685'
    }).then((result) => {
      if (result.value) {
        this.store.dispatch(new DeleteImages(this.selectedImages.map(i => {return i.googleDriveId}), this.album.googleDriveId))
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  onMultipleImageDownload() {
    this.store.dispatch(new OpenLoading())
    this.store.dispatch(new DownloadSelectedImages())
  }

  onSettings() {
    this.store.dispatch(new OpenSettings());
  }
 
   onInfo() {
     this.store.dispatch(new OpenAlbumInfo(this.album));
   }

  showImage(img: Image) {
    this.openImgModal(img);
    this.store.dispatch(new GetImage(img.googleDriveId));
  }

  showImageInfo(e) {
    this.store.dispatch(new OpenAlbumInfo(e, 't'));
  }

  canDelete(): boolean {
    const userid = localStorage.getItem('scrapbook-userid');
    for(let i of this.selectedImages) {
      if(i.createdBy._id !== userid) return false;
    }
    return true;
  }

  openSettingsModal() {
    if (this.dialog.getDialogById('AlbumSettingsModal')) return;
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = false;
    config.id = 'AlbumSettingsModal';
    config.width = '600px';
    config.autoFocus = false;
    config.data = this.album;

    const albumSettingsDialog = this.dialog.open(SettingsComponent, config);

    albumSettingsDialog.componentInstance.close.subscribe(_ => {
      this.store.dispatch(new CloseSettings());
    });

    albumSettingsDialog.componentInstance.update.subscribe(data => {
      this.store.dispatch(new EditAlbumSettings(data.name, data.description))
    });

    albumSettingsDialog.componentInstance.delete.subscribe(data => {
      this.store.dispatch(new DeleteAlbum(this.album.googleDriveId));
    })

    albumSettingsDialog.afterClosed().subscribe(_ => {
      this.store.dispatch(new CloseSettings());
    })
  }

  closeSettingsModal() {
    const albumSettingsDialog = this.dialog.getDialogById('AlbumSettingsModal');

    if (albumSettingsDialog) {
      this.store.dispatch(new CloseSettings());
      albumSettingsDialog.close();
    }
  }

  openImgModal(img: Image) {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = false;
    config.id = 'ImageDialog';
    config.panelClass = 'no-padding';
    config.data = {
      image: img
    };

    const imageDialog = this.dialog.open(ImageModalComponent, config);

    imageDialog.componentInstance.close.subscribe(data => {
      this.closeImgModal();
    });

    imageDialog.componentInstance.download.subscribe(data => {
      this.downloadImage(data);
    });

    imageDialog.afterClosed().subscribe((_) => {
      this.store.dispatch(new CloseImageModal());
    });
  }

  closeImgModal() {
    const imageDialog = this.dialog.getDialogById('ImageDialog');

    if (imageDialog) {
      this.store.dispatch(new CloseImageModal());
      imageDialog.close();
    }
  }

  downloadImage(data: any) {
    const {img, name} = data;
    this.store.dispatch(new DownloadImage(img, name));
  }

  async editImage(data: Image) {
    
    const { value: imageName } = await Swal.fire({
      title: 'Edit Image Name',
      input: 'text',
      inputLabel: 'Image name',
      inputPlaceholder: 'Enter Image Name',
      inputValue: data.name.split('.')[0],
      confirmButtonText: 'Update',
      customClass: {
        header: 'text-left',
        container: 'd-flex justify-content-start',
        popup: 'd-flex justify-content-start',
        title: 'text-left',
        input: 'bg-light border-0 form-control',
        confirmButton: 'bg-success',
      }
    })
    
    if (imageName) {
       this.store.dispatch(new RenameImage(`${imageName}.${data.extension}`, data.googleDriveId))
    }
  }

  deleteImage(data: Image) {
    Swal.fire({
      title: 'Are you sure you want to delete the images?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#EB7373',
      cancelButtonColor: '#85C685'
    }).then((result) => {
      if (result.value) {
        this.store.dispatch(new DeleteImages([data.googleDriveId], this.album.googleDriveId))
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  starImage(data: any) {

  }

}
