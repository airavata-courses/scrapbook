import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { Router, NavigationStart } from '@angular/router';
import { Store } from '@ngxs/store';
import { PutAlbumInView } from 'src/app/actions/album.actions';

@Injectable({
  providedIn: 'root'
})
export class AlbumViewService {
  album$ = new BehaviorSubject<Album>(null);
  settings$ = new BehaviorSubject<boolean>(false);

  constructor(public router: Router, public store: Store) {

  }
}
