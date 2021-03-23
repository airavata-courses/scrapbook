import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Select } from '@ngxs/store';
import { UserState } from 'src/app/stores/user.state';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  faTimes = faTimes;
  data: any;
  moment = moment;
  
  @Select(UserState.getHistory) history$: Observable<any>;
  @Select(UserState.getHistoryLoading) loading$: Observable<boolean>;

  @Output() closeDrawer = new EventEmitter();

  constructor() { 
    this.history$.subscribe(data => {
      if(data) {
        this.data = data;
      }
    })
  }

  ngOnInit(): void {
  }

}
