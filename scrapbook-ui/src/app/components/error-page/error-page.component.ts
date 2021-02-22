import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UIState } from 'src/app/stores/ui.state';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, AfterViewInit {
  faRight = faLongArrowAltRight;
  errImg = '';
  constructor(public store: Store, public router: Router) { }

  ngOnInit(): void {
    this.errImg = this.store.selectSnapshot(UIState.getPageErr);
  }

  ngAfterViewInit(): void {

  }

}
