import { Component, OnInit, Input, Output } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { OpenAlbumInfo, RemoveAlbumFromView, FetchAllAlbums, FetchAllAlbumsOfUser, ClearSearchText, GetSharedAlbumsOfUser } from 'src/app/actions/album.actions';
import { Album } from 'src/app/models/album.model';
import { AlbumListService } from './album-list.service';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/stores/user.state';
import { Router } from '@angular/router';

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

  constructor(private store: Store, public albumListService: AlbumListService, public router: Router) {
    
    this.store.dispatch(new RemoveAlbumFromView());
    this.store.dispatch(new ClearSearchText());

    if(router.url === '/home') {
      this.store.dispatch(new FetchAllAlbumsOfUser(localStorage.getItem('scrapbook-userid')))
    } else if (router.url === '/shared') {
      this.store.dispatch(new GetSharedAlbumsOfUser());
    }
    
    
    this.allAlbumsOfUser$.subscribe(data => {
      if (data) {
        this.albums = data;
      }
    });
   }

  ngOnInit(): void {
  }


  showAlbumInfo(e: Album) {
    this.store.dispatch(new OpenAlbumInfo(e));
  }

}
