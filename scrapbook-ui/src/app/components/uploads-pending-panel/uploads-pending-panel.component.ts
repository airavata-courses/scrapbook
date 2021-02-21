import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Select } from '@ngxs/store';
import { UIState } from 'src/app/stores/ui.state';
import { Observable } from 'rxjs';
import { AlbumState } from 'src/app/stores/album.state';

@Component({
  selector: 'app-uploads-pending-panel',
  templateUrl: './uploads-pending-panel.component.html',
  styleUrls: ['./uploads-pending-panel.component.scss']
})
export class UploadsPendingPanelComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  @Select(AlbumState.getUploadPanelPendingArray) uploadsArray$: Observable<any>;

  pendingUploads = [];

  constructor() {
    this.uploadsArray$.subscribe(arr => {
      if (arr.length) {
        this.pendingUploads = arr;
      }
    });
   }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }

}
