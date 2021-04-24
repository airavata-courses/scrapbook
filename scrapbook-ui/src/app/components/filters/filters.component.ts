import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import * as moment from 'moment';
import { Store, Select } from '@ngxs/store';
import { AlbumState } from 'src/app/stores/album.state';
import { Observable } from 'rxjs';
import { Filters, ImageFilters, SelectedImageFilters } from 'src/app/models/search.model';
import { SearchAndFilterAlbums, SearchAndFilterImages, GetAllFilters, SelectFilters, RemoveFilters, PutAlbumInView } from 'src/app/actions/album.actions';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';

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
  imageFilters: ImageFilters = {FocalLength: [], Aperture: [], Camera: [], GPS: [], ISOSpeedRatings: []}
  mode: number;
  selectedFilters: SelectedImageFilters = {FocalLength:'', Aperture: '', Camera: '', GPS: '', ISOSpeedRatings: ''};
  onSelectedFilters: SelectedImageFilters = {FocalLength:'', Aperture: '', Camera: '', GPS: '', ISOSpeedRatings: ''}

  @Select(AlbumState.getFilters) filters$: Observable<any>;
  @Select(AlbumState.getImageFilters) imageFilters$: Observable<ImageFilters>;
  @Select(AlbumState.getSelectedImageFilters) sif$: Observable<SelectedImageFilters>;

  @Output() sync: EventEmitter<any> = new EventEmitter<any>();

  constructor(public store: Store, public router: Router) { 

    if(router.url.split('/').length === 2) {
      this.mode = 1;
    } else if (router.url.split('/').length === 3) {
      this.mode = 2
      this.store.dispatch(new GetAllFilters());
    }

    this.filters$.subscribe(val => {
      if(val) {
       this.createdDateFilter = val.createdDateFilter;
       this.creationDateRange.get('start').setValue(new Date(val.createdDateFilter.split(' - ')[0]));
       this.creationDateRange.get('end').setValue(new Date(val.createdDateFilter.split(' - ')[1]));
        
       this.modifiedDateFilter = val.modifiedDateFilter;
       this.lastEditDateRange.get('start').setValue(new Date(val.modifiedDateFilter.split(' - ')[0]));
       this.lastEditDateRange.get('end').setValue(new Date(val.modifiedDateFilter.split(' - ')[1]));
      } else {
        this.createdDateFilter = '';
        this.modifiedDateFilter = '';
      }
    })

    this.imageFilters$.subscribe(val => {
      if(val) {
        this.imageFilters = val;
      }
    });

    this.sif$.subscribe(val => {
      if(val) {
        this.selectedFilters = val;
        this.onSelectedFilters = JSON.parse(JSON.stringify(val))
      }
    });
  }

  ngOnInit(): void { }

  onReset() {
    this.store.dispatch(new RemoveFilters());
  }

  updateCreationDate() {
    this.createdDateFilter = this.creationDateRange.get('start').value + ' - ' + this.creationDateRange.get('end').value;
  }

  updateLastEditDate() {
    this.modifiedDateFilter = this.lastEditDateRange.get('start').value + ' - ' + this.lastEditDateRange.get('end').value;
  }

  onApplyFilters() {
    if(this.ifNone()) {
      this.onSync();
    } else {
      if(this.getMode() === 1) {
        this.store.dispatch(new SearchAndFilterAlbums(null, {createdDateFilter: this.createdDateFilter, modifiedDateFilter: this.modifiedDateFilter}));
      } else if (this.getMode() === 2) {
        this.store.dispatch(new SelectFilters(this.onSelectedFilters))
        this.store.dispatch(new SearchAndFilterImages(null, {createdDateFilter: this.createdDateFilter, modifiedDateFilter: this.modifiedDateFilter, metadata: {...this.onSelectedFilters}}));
      }
    }
    
  }

  convertDateFromDatepicker(date: string) {
    const dateObj = new Date(date);
    const momentObj = moment(dateObj);
    return momentObj.format('YYYY-MM-DD');
  }

  ifNone() {
    if(this.createdDateFilter === '' && this.modifiedDateFilter === '' && Object.values(this.onSelectedFilters).length === 0) {
      return true;
    }
    return false;
  }

  getMode() {
    const routerSplit = this.router.url.split('/');
    if(routerSplit.length === 2) {
      return 1
    } else if(routerSplit.length === 3) {
      return 2
    }
  }

  onSync() {
    const splitRoute = this.router.url.split('/');
    const albumId = splitRoute[splitRoute.length - 1];


    this.store.dispatch(new PutAlbumInView(albumId));
  }

  selectFilter(key: string, val: MatSelectChange) {
    // switch(key) {
    //   case 'Aperture': 
    //     this.onSelectedFilters = val.value; break;
    //   case 'ISOSpeedRatings': 
    //    this.onSelectedFilters = val.value; break;
    //   case 'FocalLength': 
    //    this.onSelectedFilters = val.value; break;
    //   case 'GPS': 
    //    this.onSelectedFilters = val.value; break;
    //   case 'Camera': 
    //    this.onSelectedFilters = val.value; break;
    // }

  }



}
