import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Select, Store } from '@ngxs/store';

import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { registerIcons } from './static/registerIcons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'scrapbook';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
  ) {
    // this.store.dispatch(
    //   new StateClear()
    // );
    registerIcons(matIconRegistry, domSanitizer);
  }

}
