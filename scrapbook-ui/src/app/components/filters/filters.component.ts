import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import * as moment from 'moment';
import { Store, Select } from '@ngxs/store';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { Filters } from 'src/app/models/search.model';
import { SearchAndFilterAlbums } from 'src/app/actions/album.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  creationDateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  lastEditDateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  filters;
  mode: number;

  @Select(AlbumState.getFilters) filters$: Observable<Filters>;


  constructor(public store: Store, public router: Router) { 

    console.log(router.url.split('/'))
    if(router.url.split('/').length === 2) {
      this.mode = 1;
    } else if (router.url.split('/').length === 3) {
      this.mode = 2
    }

    this.filters$.subscribe(val => {
      if(val) {
        this.filters = JSON.parse(JSON.stringify(val));
        if (val.startCreatedDate === '') {
          this.filters.startCreatedDate = 'Any';
        }
        if (val.startModifiedDate === '') {
          this.filters.startModifiedDate = 'Any';
        }
      }
      
    })
  }

  ngOnInit(): void {


  }



  updateCreationDate() {
    this.filters.startCreatedDate = this.creationDateRange.get('start').value;
    this.filters.endCreatedDate = this.creationDateRange.get('end').value;
  }

  updateLastEditDate() {
    this.filters.startModifiedDate = this.lastEditDateRange.get('start').value;
    this.filters.endModifiedDate =  this.lastEditDateRange.get('end').value;
  }

  onApplyFilters() {
    let payload: Filters = {startCreatedDate: '', endCreatedDate: '', startModifiedDate: '', endModifiedDate: ''};
    for(let key in this.filters) {
      if (!this.filters[key] || this.filters[key]==='Any') {
        payload[key] = null;
        continue;
      } else {
        payload[key] = moment(this.filters[key]).format('MM/DD/yyyy'); 
      }
    }
    this.store.dispatch(new SearchAndFilterAlbums('', payload));
  }

  convertDateFromDatepicker(date: string) {
    const dateObj = new Date(date);
    const momentObj = moment(dateObj);
    return momentObj.format('YYYY-MM-DD');
  }



}
