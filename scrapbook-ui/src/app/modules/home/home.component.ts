import { Component, OnInit } from '@angular/core';
import { FetchUserData } from 'src/app/actions/user.actions';
import { Store } from '@ngxs/store';
import { FetchAllAlbumsOfUser } from 'src/app/actions/album.actions';
import { UserState } from 'src/app/stores/user.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public store: Store) { }

  ngOnInit(): void {
    const userID = this.store.selectSnapshot(UserState.getUserData)._id
    this.store.dispatch(new FetchAllAlbumsOfUser(userID))
    // this.store.dispatch(new FetchUserData(''))
  }

}
