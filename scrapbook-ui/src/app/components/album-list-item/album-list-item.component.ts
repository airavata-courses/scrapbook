import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Album } from 'src/app/models/album.model';
import * as moment from 'moment'

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss']
})
export class AlbumListItemComponent implements OnInit {
  
  faTh = faLayerGroup;
  moment = moment;
  
  @Input() album: Album;
  @Output() showAlbumInfo: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onShowAlbumInfo() {
    // pass the id of the current album
    this.showAlbumInfo.emit(this.album.id)
  }

}
