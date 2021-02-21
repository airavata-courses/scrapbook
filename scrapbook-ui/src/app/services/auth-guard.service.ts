import { Injectable, NgZone } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, public store: Store, private ngZone: NgZone) { }

  canActivate() {

    if (localStorage.getItem('scrapbook-userid')) {
      return true;
    }
    console.log('here')
    this.ngZone.run(() => this.router.navigate(['/']));
    return false;
  }
}
