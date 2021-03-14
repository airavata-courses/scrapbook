import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTimes,faSortDown } from "@fortawesome/free-solid-svg-icons";

import * as moment from 'moment';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  moment = moment;
  Math = Math;
  faTimes = faTimes;
  faSortDown = faSortDown;
  Object = Object;

  @Output() infoClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onInfoClose() {
    this.infoClose.emit();
  }

}
