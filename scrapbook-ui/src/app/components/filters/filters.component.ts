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

  createdDateFilter = ''
  modifiedDateFilter = ''
  filters: Filters = {startCreatedDate: '', startModifiedDate: '', endCreatedDate: '', endModifiedDate: ''}
  mode: number;

  @Select(AlbumState.getFilters) filters$: Observable<any>;


  constructor(public store: Store, public router: Router) { 

    if(router.url.split('/').length === 2) {
      this.mode = 1;
    } else if (router.url.split('/').length === 3) {
      this.mode = 2
    }

    this.filters$.subscribe(val => {
      if(val) {
       this.createdDateFilter = val.createdDateFilter;
       this.creationDateRange.get('start').setValue(new Date(val.createdDateFilter.split(' - ')[0]));
       this.creationDateRange.get('end').setValue(new Date(val.createdDateFilter.split(' - ')[1]));
        
       this.modifiedDateFilter = val.modifiedDateFilter;
       this.lastEditDateRange.get('start').setValue(new Date(val.modifiedDateFilter.split(' - ')[0]));
       this.lastEditDateRange.get('end').setValue(new Date(val.modifiedDateFilter.split(' - ')[1]));
      }
      
    })
  }

  ngOnInit(): void {


  }



  updateCreationDate() {
    this.createdDateFilter = this.creationDateRange.get('start').value + ' - ' + this.creationDateRange.get('end').value;
  }

  updateLastEditDate() {
    this.modifiedDateFilter = this.lastEditDateRange.get('start').value + ' - ' + this.lastEditDateRange.get('end').value;
  }

  onApplyFilters() {
    this.store.dispatch(new SearchAndFilterAlbums('', {createdDateFilter: this.createdDateFilter, modifiedDateFilter: this.modifiedDateFilter}));
  }

  convertDateFromDatepicker(date: string) {
    const dateObj = new Date(date);
    const momentObj = moment(dateObj);
    return momentObj.format('YYYY-MM-DD');
  }



}
