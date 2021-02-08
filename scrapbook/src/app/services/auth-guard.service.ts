import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserState, UserStateModel } from '../stores/user.state';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, public store: Store) { }

  canActivate() {
    // make call to session manager to see if token valid
    console.log('make call to session manager to see if token valid')
    if (this.store.selectSnapshot(UserState.getUserToken)) {
      return true
    }
    this.router.navigate(['/'])
    return false
  }
}
