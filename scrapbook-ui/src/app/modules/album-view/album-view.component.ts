import { Component, OnInit } from '@angular/core';
import { AlbumViewService } from './album-view.service';
import { Album } from 'src/app/models/album.model';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { PutAlbumInView, OpenAlbumInfo } from 'src/app/actions/album.actions';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  album: Album;
  @Select(AlbumState.getAlbumInView) albumInView$: Observable<Album>;

  constructor(public albumViewService: AlbumViewService, public router: Router, public store: Store) { 
    const splitRoute = router.url.split('/')
    const albumId = splitRoute[splitRoute.length - 1];
    // get data for that route
    this.store.dispatch(new PutAlbumInView(albumId))
    this.albumInView$.subscribe(data => {
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
