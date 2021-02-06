import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ViewportScroller } from '@angular/common';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, AfterViewInit {
  faGithub = faGithub;

  constructor(private router: Router) {}

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
    this.router.navigate(['/home'])
  }
}
