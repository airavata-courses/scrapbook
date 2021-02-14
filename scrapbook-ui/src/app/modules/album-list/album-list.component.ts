import { Component, OnInit, Input, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { OpenAlbumInfo } from 'src/app/actions/album.actions';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  
  @Input() albums: Album[];
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  showAlbumInfo(e: string) {
    this.store.dispatch(new OpenAlbumInfo(e))
  }

}
