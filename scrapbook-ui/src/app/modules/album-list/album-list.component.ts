import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { OpenAlbumInfo } from 'src/app/actions/album.actions';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  showAlbumInfo(e: Event) {
    this.store.dispatch(new OpenAlbumInfo('2'))
  }

}
