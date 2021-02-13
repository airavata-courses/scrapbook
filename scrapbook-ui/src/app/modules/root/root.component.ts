import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from './../../components/profile/profile.component';
import { CloseProfile, CloseUpload, CloseFilters } from '../../actions/ui.actions';
import { InfoComponent } from '../../components/info/info.component';
import { CloseAlbumInfo } from './../../actions/album.actions';
import { AlbumState } from './../../stores/album.state';
import { registerIcons } from './../../static/registerIcons';
import { UploadComponent } from './../../components/upload/upload.component';
import { FiltersComponent } from './../../components/filters/filters.component';
import { StateClear } from 'ngxs-reset-plugin';
import { UIState } from 'src/app/stores/ui.state';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  title = 'scrapbook';

  @Select(UIState.getProfileStatus) profile$: Observable<boolean>;
  @Select(UIState.getUploadModalStatus) upload$: Observable<boolean>;
  @Select(UIState.getFiltersStatus) filters$: Observable<boolean>;

  @Select(AlbumState.getInfoModalState) info$: Observable<boolean>;


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
    private dialog: MatDialog,
    private store: Store
  ) {
    // this.store.dispatch(
    //   new StateClear()
    // );
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

    this.filters$.subscribe((status) => {
      if (status) this.openFilters();
      else this.closeFilters();
    })
  }

  ngOnInit(): void {}

  openFilters() {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.id = 'filterModal';
    config.width = '650px';
    config.autoFocus = false;
    config.backdropClass = 'backdrop';

    const filterDialog = this.dialog.open(FiltersComponent, config);
    // apply filters code goes here
    filterDialog.updatePosition({ top: '80px', left: '260px' });

    filterDialog.afterClosed().subscribe((_) => {
      this.store.dispatch(new CloseFilters());
    });
  }

  closeFilters() {
    const filterModal = this.dialog.getDialogById('filterModal');

    if (filterModal) {
      this.store.dispatch(new CloseFilters());
      filterModal.close();
    }
  }

  openUploadModal() {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.id = 'UploadModal';
    config.width = '800px';
    config.height = "600px";
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