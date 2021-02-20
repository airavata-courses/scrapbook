import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Album } from 'src/app/models/album.model';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { formatBytes } from 'src/app/static/util';


@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss']
})
export class AlbumListItemComponent implements OnInit {

  faTh = faLayerGroup;
  moment = moment;
  Math = Math;
  formatBytes = formatBytes;

  @Input() album: Album;
  @Output() showAlbumInfo: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onShowAlbumInfo() {
    // pass the id of the current album
    this.showAlbumInfo.emit(this.album.id);
  }

  goToAlbum() {
    this.router.navigate([this.router.url + `/${this.album.id}`]);
  }

}
