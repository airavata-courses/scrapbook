import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { OpenProfile, OpenUpload } from 'src/app/actions/ui.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faUserCircle = faUserCircle;
  img: string;
  constructor(public store: Store) { 
    this.img = localStorage.getItem('scrapbook-photo')
  }

  ngOnInit(): void {
  }

  openProfile() {
    this.store.dispatch(new OpenProfile);
  }
  onUploadModalOpen() {
    this.store.dispatch(new OpenUpload);
  }

}
