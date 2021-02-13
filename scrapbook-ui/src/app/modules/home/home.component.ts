import { Component, OnInit } from '@angular/core';
import { FetchUserData } from 'src/app/actions/user.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchUserData(''))
  }

}
