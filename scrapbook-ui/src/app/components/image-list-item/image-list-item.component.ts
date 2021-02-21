import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { Image } from 'src/app/models/image.model';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { formatBytes } from 'src/app/static/util';
import { Store } from '@ngxs/store';
import { SelectMultipleImages, RemoveSelectedImage } from 'src/app/actions/album.actions';
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent implements OnInit, OnChanges {

  moment = moment;
  Math = Math;
  faFileImage = faFileImage;
  formatBytes = formatBytes;
  currentImage: Image;

  @Input() image: Image;
  @Input() selected: any;
  @Output() showImageInfo: EventEmitter<any> = new EventEmitter<any>();
  @Output() showImage: EventEmitter<any> = new EventEmitter<any>();
  @Output() editImage: EventEmitter<any> = new EventEmitter<any>();
  @Output() starImage: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteImage: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectImage: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.currentImage =  Object.assign({}, this.image)
    const isSelected = this.selected.findIndex(i => i.id === this.currentImage.id)
    if (isSelected !== -1) {
      this.currentImage.isSelected = true;
    } else {
      this.currentImage.isSelected = false;
    }

    
  }

  onImageSelect(value: MatCheckboxChange) {
    if (value.checked)
      this.store.dispatch(new SelectMultipleImages(this.image));
    else {
      this.store.dispatch(new RemoveSelectedImage(this.image));
    }
  }

  onShowImage(imgId: Image) {
    this.showImage.emit(imgId);
  }

  onShowImageInfo() {
    this.showImageInfo.emit(this.image);
  }

  onEditImage() {
    this.editImage.emit(this.image);
  }

  onStarImage() {
    this.starImage.emit(this.image)
  }

  onDeleteImage() {
    this.deleteImage.emit(this.image)
  }

}
