import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { GoogleLogin } from 'src/app/actions/user.actions';
import { ClearPageError, CloseLoading, CloseLogin, OpenLogin } from 'src/app/actions/ui.actions';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UIState } from 'src/app/stores/ui.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, AfterViewInit {
  faGithub = faGithub;
  faLongArrowAltRight = faLongArrowAltRight;

  @Select(UIState.getLoginState) login$: Observable<boolean>;

  constructor(private router: Router, private store: Store, private dialog: MatDialog) {
    this.store.dispatch(new ClearPageError());
    
    this.login$.subscribe(val => {
      if(val) {
        this.openLoginDialog();
      } else {
        this.closeLoginDialog();
      }
    })
  
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  scrollToElement($element: Element): void {
    const dims = $element.getBoundingClientRect();
    window.scrollTo({
      top: dims.top - 50,
      left: window.scrollX,
      behavior: 'smooth',
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = document.querySelector('.navbr');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-light');
    } else {
      element.classList.remove('bg-light');
    }
  }

  onLogin() {
    // this.router.navigate(['/home'])
  }

  openLoginDialog() {
    if (this.dialog.getDialogById('LoginModal')) return;
    const config = new MatDialogConfig();
    config.disableClose = false;
    config.autoFocus = false;
    config.id = 'LoginModal';
    config.width = '425px';
    config.autoFocus = false;

    const loginDialog = this.dialog.open(LoginComponent, config);

    loginDialog.afterClosed().subscribe(_ => {
      this.store.dispatch(new CloseLogin());
    })
  }

  closeLoginDialog() {
    const loginDialog = this.dialog.getDialogById('LoginModal');

    if (loginDialog) {
      this.store.dispatch(new CloseLogin());
      loginDialog.close();
    }
    
  }

  start() {
    this.store.dispatch(new OpenLogin());
  }

  onGoogleLogin() {
    this.store.dispatch(new GoogleLogin());
  }
}
