import { Component, OnInit } from '@angular/core';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  faTh = faLayerGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
