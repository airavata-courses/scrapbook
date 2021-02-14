import { Component, OnInit } from '@angular/core';
import { FetchUserData } from 'src/app/actions/user.actions';
import { Store, Select } from '@ngxs/store';
import { FetchAllAlbumsOfUser } from 'src/app/actions/album.actions';
import { UserState } from 'src/app/stores/user.state';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Select(AlbumState.getAllAlbumsOfUser) userAlbums$: Observable<Album[]>;

  constructor(public store: Store) { }

  ngOnInit(): void {
    const userID = this.store.selectSnapshot(UserState.getUserData)._id
    this.store.dispatch(new FetchAllAlbumsOfUser(userID))
    // this.store.dispatch(new FetchUserData(''))
  }

}
