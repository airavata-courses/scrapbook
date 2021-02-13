import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/stores/user.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Logout } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Select(UserState.getUserData) userData$: Observable<any>;
  
  userData: any;

  constructor(private router: Router, public store: Store) {
    this.userData$.subscribe((data) => {
      this.userData = data;
    });
  }

  ngOnInit(): void {}

  logout() {
      this.store.dispatch(new Logout()).subscribe(_ => {
        this.router.navigate(['/'])
      })
  }
}
