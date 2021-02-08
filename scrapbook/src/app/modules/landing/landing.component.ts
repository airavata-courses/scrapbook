import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GoogleLogin, PutUserInSession } from 'src/app/actions/user.actions';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, AfterViewInit {
  faGithub = faGithub;

  constructor(private router: Router, private store: Store, public authService: SocialAuthService) {
    this.authService.authState.subscribe(authState => {
      if (authState.authToken) {
        store.dispatch(new PutUserInSession(authState)).subscribe(_ => {
          router.navigate(['/home'])
        })
      }
    })
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  scrollToElement($element: Element): void {
    let dims = $element.getBoundingClientRect();
    window.scrollTo({
      top: dims.top - 50,
      left: window.scrollX,
      behavior: 'smooth',
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbr');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-light');
    } else {
      element.classList.remove('bg-light');
    }
  }

  onLogin() {
    // this.router.navigate(['/home'])
  }

  onGoogleLogin() {
    this.store.dispatch(new GoogleLogin());
  }
}
