import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetSharedAlbumsOfUser } from 'src/app/actions/album.actions';
import { Router } from '@angular/router';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { AlbumListService } from '../album-list/album-list.service';
import { AlbumViewService } from '../album-view/album-view.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  @Select(AlbumState.getAllAlbumsOfUser) userAlbums$: Observable<Album[]>;
  @Select(AlbumState.getAlbumInView) albumInView$: Observable<Album>;
  selectedAlbum: Album;
  openSettings;
  constructor(public store: Store, public router: Router, public albumListService: AlbumListService, public albumViewService: AlbumViewService) { 
    this.store.dispatch(new GetSharedAlbumsOfUser());
    this.userAlbums$.subscribe(data => {
      if (data.length) {
        console.log(data)
        this.albumListService.data$.next(data);
      }
    });

    this.albumInView$.subscribe(data => {
       if (data) {
        this.selectedAlbum = data;
        this.albumViewService.album$.next(data);
       }
    });
  }

  ngOnInit(): void {
  }

}