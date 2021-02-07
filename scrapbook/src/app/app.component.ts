import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Select, Store } from '@ngxs/store';
import { UIState } from './stores/ui.state';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { FetchUserData } from './actions/user.actions';
import { CloseProfile, CloseUpload } from './actions/ui.actions';
import { InfoComponent } from './components/info/info.component';
import { CloseAlbumInfo } from './actions/album.actions';
import { AlbumState } from './stores/album.state';
import { registerIcons } from './static/registerIcons';
import { UploadComponent } from './components/upload/upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'scrapbook';
  @Select(UIState.getProfileStatus) profile$: Observable<boolean>;
  @Select(AlbumState.getInfoModalState) info$: Observable<boolean>;
  @Select(UIState.getUploadModalStatus) upload$: Observable<boolean>;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
    private dialog: MatDialog,
    private store: Store
  ) {
    registerIcons(matIconRegistry, domSanitizer);

    this.profile$.subscribe((status) => {
      if (status) this.openProfile();
      else this.closeProfile();
    });

    this.info$.subscribe((status) => {
      if (status) this.openInfoModal();
      else this.closeInfoModal();
    });

    this.upload$.subscribe((status) => {
      if (status) this.openUploadModal();
      else this.closeUploadModal();
    });
  }

  ngOnInit(): void {}

  openUploadModal() {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.id = 'UploadModal';
    config.width = '800px';
    config.autoFocus = false;

    const uploadDialog = this.dialog.open(UploadComponent, config);
    uploadDialog.componentInstance.close.subscribe((data) => {
      this.closeUploadModal();
    });

    uploadDialog.afterClosed().subscribe((_) => {
      this.store.dispatch(new CloseUpload());
    });
  }

  closeUploadModal() {
    const uploadModal = this.dialog.getDialogById('UploadModal');

    if (uploadModal) {
      this.store.dispatch(new CloseUpload());
      uploadModal.close();
    }
  }

  openInfoModal() {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.id = 'InfoModal';
    config.width = '600px';
    config.autoFocus = false;

    const infoDialog = this.dialog.open(InfoComponent, config);
    infoDialog.componentInstance.infoClose.subscribe((data) => {
      this.closeInfoModal();
    });

    infoDialog.afterClosed().subscribe((_) => {
      this.store.dispatch(new CloseAlbumInfo());
    });
  }

  closeInfoModal() {
    const infoModal = this.dialog.getDialogById('InfoModal');

    if (infoModal) {
      this.store.dispatch(new CloseAlbumInfo());
      infoModal.close();
    }
  }

  openProfile() {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.id = 'ProfileDialog';
    config.width = '300px';
    config.backdropClass = 'backdrop';

    const profileDialog = this.dialog.open(ProfileComponent, config);
    profileDialog.updatePosition({ top: '80px', right: '50px' });
    this.store.dispatch(new FetchUserData('id'));
    profileDialog.afterClosed().subscribe((_) => {
      this.store.dispatch(new CloseProfile());
    });
  }

  closeProfile() {
    const profileDialog = this.dialog.getDialogById('ProfileDialog');

    if (profileDialog) {
      this.store.dispatch(new CloseProfile());
      profileDialog.close();
    }
  }
}
