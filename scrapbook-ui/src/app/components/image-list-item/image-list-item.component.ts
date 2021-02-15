import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import * as moment from 'moment'
import { Image } from 'src/app/models/image.model';
import { faFileImage } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent implements OnInit {
  
  moment = moment;
  Math = Math;
  faFileImage= faFileImage;
  @Input() image: Image;
  @Output() showImageInfo: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  showImage() {

  }

  onShowImageInfo() {
    this.showImageInfo.emit(this.image.id);
  }

}
