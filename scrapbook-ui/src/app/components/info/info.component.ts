import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from 'src/app/models/album.model';
import { Image } from 'src/app/models/image.model';

import * as moment from 'moment'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  moment = moment;
  @Output() infoClose: EventEmitter<any> = new EventEmitter<any>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(data)
  }

  ngOnInit(): void {
  }

  onInfoClose() {
    this.infoClose.emit();
  }

}
