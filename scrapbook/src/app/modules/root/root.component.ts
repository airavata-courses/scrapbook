import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { Store, Select } from '@ngxs/store';
import { FetchUserData } from 'src/app/actions/user.actions';
import { UIStateModel, UIState } from 'src/app/stores/ui.state';
import { Observable } from 'rxjs';
import { CloseProfile } from 'src/app/actions/ui.actions';
import { Router } from '@angular/router';
import { AlbumState } from 'src/app/stores/album.state';
import { CloseAlbumInfo } from 'src/app/actions/album.actions';
import { InfoComponent } from 'src/app/components/info/info.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  
  @Select(UIState.getProfileStatus) profile$: Observable<boolean>;
  @Select(AlbumState.getInfoModalState) info$: Observable<boolean>;

  constructor(public dialog: MatDialog, public store: Store, public router: Router) {
    this.profile$.subscribe(status => {
      if (status) this.openProfile()
      else this.closeProfile()
    })

   
   }

  ngOnInit(): void {
  }



  openProfile() {
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.id = 'ProfileDialog';
    config.width = '300px';
    config.backdropClass = 'backdrop'
    
    const profileDialog = this.dialog.open(ProfileComponent, config);
    profileDialog.updatePosition({top: '80px', right: '50px'})
    this.store.dispatch(new FetchUserData('id'));
    profileDialog.afterClosed().subscribe(_ => {
      this.store.dispatch(new CloseProfile)
    })
  }

  closeProfile() {
    const profileDialog = this.dialog.getDialogById('ProfileDialog');
    
    if (profileDialog) {
      this.store.dispatch(new CloseProfile)
      profileDialog.close()
    }
  }

}
