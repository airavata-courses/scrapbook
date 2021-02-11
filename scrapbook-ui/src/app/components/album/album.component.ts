import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  faTh = faLayerGroup;

  @Output() showAlbumInfo: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onShowAlbumInfo() {
    // pass the id of the current album
    this.showAlbumInfo.emit()
  }

}
