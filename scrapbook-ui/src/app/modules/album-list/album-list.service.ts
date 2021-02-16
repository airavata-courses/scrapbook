import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { UserState } from 'src/app/stores/user.state';
import { Store } from '@ngxs/store';
import { FetchAllAlbumsOfUser, RemoveAlbumFromView } from 'src/app/actions/album.actions';

@Injectable({
  providedIn: 'root'
})
export class AlbumListService {
  data$ = new BehaviorSubject<Album[]>(null);
  constructor(public store: Store) {
    // const userID = this.store.selectSnapshot(UserState.getUserData)._id
    // this.store.dispatch(new RemoveAlbumFromView())
    // this.store.dispatch(new FetchAllAlbumsOfUser(userID))
   }
}
