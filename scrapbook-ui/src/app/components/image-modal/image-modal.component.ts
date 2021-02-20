import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from 'src/app/models/image.model';
import { Select } from '@ngxs/store';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
import { faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  image: Image;
  loading = true;
  imgSrc: SafeUrl;
  faDownload = faDownload;
  faTimes = faTimes;

  @Output() close: EventEmitter<any>  = new EventEmitter<any>();
  @Output() download: EventEmitter<any>  = new EventEmitter<any>();

  @Select(AlbumState.getImageSrc) image$: Observable<any>;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.image = data.image;
    this.image$.subscribe(src => {
      if (src) {
        this.loading = false;
        this.imgSrc = src;
      }
    });
   }

  ngOnInit(): void {
  }

  onImgModalClose() {
    this.close.emit();
  }

  downloadImage() {
    this.download.emit({img: this.imgSrc, name: this.image.name});
  }

}
