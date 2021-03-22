import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GoogleLogin, SignUp, CustomLogin } from 'src/app/actions/user.actions';
import { UserService } from 'src/app/services/user.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OpenLoading, CloseLoading } from 'src/app/actions/ui.actions';
import { UserState } from 'src/app/stores/user.state';
import { Observable } from 'rxjs';
import { MatTabGroup } from '@angular/material/tabs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;
  name: string; 
  error: string = '';

  @Select(UserState.getSignUpSuccess) sss$: Observable<boolean>;
  @Select(UserState.getSignUpError) err$: Observable<string>;
  @Select(UserState.getSignInError) sir$: Observable<string>;

  @ViewChild("tabs", { static: false }) tabs: MatTabGroup;


  constructor(public store: Store, public userService: UserService, public router: Router) { 

    this.sss$.subscribe(val => {
      if(val) {
        Swal.fire({
          icon: 'success',
          title: 'Successfully registered!',
          showConfirmButton: false,
          timer: 1500
        })
        this.error = '';
        this.reset();
        this.tabs.selectedIndex = 0;
      }
    })

    this.err$.subscribe(val => {
      if(val) {
        this.error = val;
      } else {
        this.error = '';
      }
    })

    this.sir$.subscribe(val => {
      if(val) {
        this.error = val;
      } else {
        this.error = '';
      }
    })
  }

  ngOnInit(): void {
  }

  onCustomLogin() {
    this.store.dispatch(new CustomLogin(this.email, this.password));
  }

  onSignUp() {
    this.store.dispatch(new SignUp(this.email, this.password, this.name));
  }

  reset() {
    [this.password, this.email, this.name, this.error] = ['', '', '', ''];
  }

  onGoogleLogin() {
    this.store.dispatch(new GoogleLogin());
  }

}
