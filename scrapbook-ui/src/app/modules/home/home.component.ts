import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import {  OpenAlbumInfo } from 'src/app/actions/album.actions';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { Router } from '@angular/router';
import { AlbumListService } from '../album-list/album-list.service';
import { AlbumViewService } from '../album-view/album-view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Select(AlbumState.getAllAlbumsOfUser) userAlbums$: Observable<Album[]>;
  @Select(AlbumState.getAlbumInView) albumInView$: Observable<Album>;

  selectedAlbum: Album;
  openSettings;

  constructor(public store: Store, public albumListService: AlbumListService, public router: Router, public albumViewService: AlbumViewService) { 
    this.userAlbums$.subscribe(data => {
      if (data) {
        this.albumListService.data$.next(data);
      }
    })
    
    this.albumInView$.subscribe(data => {
       if (data) {
        this.selectedAlbum = data;
        this.albumViewService.album$.next(data);
       }
    })
    
  }

  ngOnInit(): void {
    
    // this.store.dispatch(new FetchUserData(''))
  }

  onSettings() {
   this.albumViewService.settings$.next(true);
  }
  
  onInfo() {
    this.store.dispatch(new OpenAlbumInfo(this.selectedAlbum.id))
  }

}
