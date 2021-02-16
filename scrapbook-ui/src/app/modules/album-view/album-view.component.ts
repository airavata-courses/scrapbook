import { Component, OnInit } from '@angular/core';
import { AlbumViewService } from './album-view.service';
import { Album } from 'src/app/models/album.model';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { PutAlbumInView, OpenAlbumInfo } from 'src/app/actions/album.actions';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  album: Album;
  constructor(public albumViewService: AlbumViewService, public router: Router, public store: Store) { 
    this.albumViewService.album$.subscribe(data => {
      this.album = data;
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

  showImageIngo(e) {
    this.store.dispatch(new OpenAlbumInfo(e, 't'))
  }

}
