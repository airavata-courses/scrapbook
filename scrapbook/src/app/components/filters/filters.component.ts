import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import * as moment from 'moment'

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

  filters = {
    creationDate: 'Any',
    lastEditDate: 'Any'
  }


  constructor() { }

  ngOnInit(): void {
    

  }



  updateCreationDate() {
    this.filters.creationDate = this.creationDateRange.get('start').value + ' - ' + this.creationDateRange.get('end').value
  }

  updateLastEditDate() {
    this.filters.lastEditDate = this.lastEditDateRange.get('start').value + ' - ' + this.lastEditDateRange.get('end').value
  }

  

  onApplyFilters() {
    console.log(this.filters)
  }

  convertDateFromDatepicker(date: string) {
    let dateObj = new Date(date);
    let momentObj = moment(dateObj);
    return momentObj.format('YYYY-MM-DD'); 
  }

  

}
