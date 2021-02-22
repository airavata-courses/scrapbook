import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/stores/user.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Logout } from 'src/app/actions/user.actions';
import { OpenLoading } from 'src/app/actions/ui.actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Select(UserState.getUserData) userData$: Observable<any>;

  userData: User;

  constructor(private router: Router, public store: Store) {
    this.userData = {
      name: localStorage.getItem('scrapbook-name'),
      email: localStorage.getItem('scrapbook-email'),
      photo: localStorage.getItem('scrapbook-photo')
    }
  }

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(new OpenLoading())
   setTimeout(() => {
    this.store.dispatch(new Logout())
   }, 500);
  }
}
