import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Select, Store } from '@ngxs/store';

import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

import { registerIcons } from './static/registerIcons';
import { UIState } from './stores/ui.state';
import { Observable } from 'rxjs';
import { LoadingComponent } from './components/loading/loading.component';
import { CloseLoading, OpenLoading } from './actions/ui.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'scrapbook';
  @Select(UIState.getLoading) loading$: Observable<boolean>;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
    private dialog: MatDialog,
    public store: Store
  ) {
    registerIcons(matIconRegistry, domSanitizer);

    this.loading$.subscribe((value) => {
      if (value) {
        this.openLoading();
      } else {
        this.closeLoading();
      }
    });

    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.store.dispatch(new OpenLoading())
    }
    if (event instanceof NavigationEnd) {
      this.store.dispatch(new CloseLoading())
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.store.dispatch(new CloseLoading())
    }
    if (event instanceof NavigationError) {
      this.store.dispatch(new CloseLoading())
    }
  }

  openLoading() {
    const loadingModal = this.dialog.getDialogById('LoadingDialog');

    if (loadingModal) return;
    
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = true;
    config.id = 'LoadingDialog';
    config.width = '200px';
    config.height = '200px';
    config.autoFocus = false;

    const loadingDialog = this.dialog.open(LoadingComponent, config);
    loadingDialog.afterClosed().subscribe((_) => {
      this.store.dispatch(new CloseLoading());
    });
  }

  closeLoading() {
    const loadingModal = this.dialog.getDialogById('LoadingDialog');

    if (loadingModal) {
      this.store.dispatch(new CloseLoading());
      loadingModal.close();
    }
  }
}
