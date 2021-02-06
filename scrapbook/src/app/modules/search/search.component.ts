import { Component, OnInit } from '@angular/core';
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  faSearch = faSearch;
  faFilter = faFilter;
  
  constructor() { }

  ngOnInit(): void {
  }

}
