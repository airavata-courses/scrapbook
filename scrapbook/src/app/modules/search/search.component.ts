import { Component, OnInit } from '@angular/core';
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Store } from '@ngxs/store';
import { OpenFilters } from 'src/app/actions/ui.actions';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  faSearch = faSearch;
  faFilter = faFilter;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  openFilters() {
    this.store.dispatch(new OpenFilters());
  }

}
