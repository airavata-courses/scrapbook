import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, public store: Store) { }

  canActivate() {

    if (localStorage.getItem('scrapbook-token')) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
