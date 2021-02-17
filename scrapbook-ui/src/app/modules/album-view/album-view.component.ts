import { Component, OnInit } from '@angular/core';
import { AlbumViewService } from './album-view.service';
import { Album } from 'src/app/models/album.model';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { PutAlbumInView, OpenAlbumInfo, GetImage, DownloadImage } from 'src/app/actions/album.actions';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UIState } from 'src/app/stores/ui.state';
import { ImageModalComponent } from 'src/app/components/image-modal/image-modal.component';
import { CloseImageModal } from 'src/app/actions/ui.actions';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  album: Album;

  @Select(AlbumState.getAlbumInView) albumInView$: Observable<Album>;
  @Select(UIState.getImgModal) imgModal$: Observable<boolean>;

  constructor(public albumViewService: AlbumViewService, public router: Router, public store: Store, public dialog: MatDialog) { 
    
    const splitRoute = router.url.split('/');
    const albumId = splitRoute[splitRoute.length - 1];

    this.store.dispatch(new PutAlbumInView(albumId));

    this.albumInView$.subscribe(data => {
      if(data) {
        this.album = data;
      }
    })
  }

  ngOnInit(): void {
  }

  showImage(img: Image) {
    this.openImgModal(img)
    this.store.dispatch(new GetImage(img.googleDriveId))
  }

  showImageInfo(e) {
    this.store.dispatch(new OpenAlbumInfo(e, 't'))
  }

  openImgModal(img: Image) {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = false;
    config.id = 'ImageDialog';
    config.panelClass = 'no-padding'
    config.data = {
      image: img
    }

    const imageDialog = this.dialog.open(ImageModalComponent, config);

    imageDialog.componentInstance.close.subscribe(data => {
      this.closeImgModal();
    })

    imageDialog.componentInstance.download.subscribe(data => {
      this.downloadImage(data);
    })

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
    this.store.dispatch(new DownloadImage(img, name))
  }

}
