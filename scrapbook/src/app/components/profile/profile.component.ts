import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { UserState } from 'src/app/stores/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Select(UserState.getUserData) userData$: Observable<any>;
  

  userData: any;

  constructor() {
    this.userData$.subscribe((data) => {
      console.log(data)
      this.userData = data;
    });
  }

  ngOnInit(): void {}
}
