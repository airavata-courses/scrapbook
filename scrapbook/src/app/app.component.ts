import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Select, Store } from '@ngxs/store';
import { UIState } from './stores/ui.state';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { FetchUserData } from './actions/user.actions';
import { CloseProfile } from './actions/ui.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scrapbook';
  @Select(UIState.getProfileStatus) profile$: Observable<boolean>;
  
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private router: Router, private dialog: MatDialog, private store: Store) {
    this.matIconRegistry.addSvgIcon(
      'iu', this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/landing/iu.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'google', this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/landing/google.svg`)
    );

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
