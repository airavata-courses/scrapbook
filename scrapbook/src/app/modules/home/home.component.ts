import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { ViewportScroller } from '@angular/common';
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

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
