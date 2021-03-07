import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { OpenFilters } from 'src/app/actions/ui.actions';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Filters } from 'src/app/models/search.model';
import { SearchAndFilterAlbums } from 'src/app/actions/album.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faSearch = faSearch;
  faFilter = faFilter;
  txtQuery: string;
  txtQueryChanged: Subject<string> = new Subject<string>();
  filters: Filters = {
    startCreatedDate: '',
    endCreatedDate: '',
    startModifiedDate: '',
    endModifiedDate: ''
  }

  constructor(private store: Store, private router: Router) { 
    this.txtQueryChanged
     .pipe(debounceTime(500), distinctUntilChanged())
     .subscribe(model => {
         this.txtQuery = model;
        this.store.dispatch(new SearchAndFilterAlbums(model, null))
     });
  }

  ngOnInit(): void {
  }

  openFilters() {
    this.store.dispatch(new OpenFilters());
  }

  onFieldChange(query:string){
    this.txtQueryChanged.next(query);
  }
  
  getMode() {
    // 1 - album
    // 2 - image

    const sp = this.router.url.split('/');

  }

}
