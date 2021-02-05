import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { ViewportScroller } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  faGithub = faGithub;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  scrollToElement($element: Element): void {
    let dims = $element.getBoundingClientRect()
    window.scrollTo({
      top: dims.top - 50,
      left: window.scrollX,
      behavior: 'smooth'
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

}
