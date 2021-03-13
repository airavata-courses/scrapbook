import { Component, OnInit, Input, Output } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { OpenAlbumInfo, RemoveAlbumFromView, FetchAllAlbums, FetchAllAlbumsOfUser, ClearSearchText } from 'src/app/actions/album.actions';
import { Album } from 'src/app/models/album.model';
import { AlbumListService } from './album-list.service';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/stores/user.state';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  // @Input() albums: Album[];
  albums: Album[];
  @Select(AlbumState.getAllAlbumsOfUser) allAlbumsOfUser$: Observable<Album[]>;
  @Select(AlbumState.getAlbumLoading) albumLoading$: Observable<boolean>;

  constructor(private store: Store, public albumListService: AlbumListService) {
    
    this.store.dispatch(new RemoveAlbumFromView());
    this.store.dispatch(new ClearSearchText());
    
    this.allAlbumsOfUser$.subscribe(data => {
      if (data) {
        this.albums = data;
      }
    });
    console.log('here')
   }

  ngOnInit(): void {
  }

  showAlbumInfo(e: Album) {
    this.store.dispatch(new OpenAlbumInfo(e));
  }

}
