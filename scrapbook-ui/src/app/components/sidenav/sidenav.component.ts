import { Component, OnInit } from '@angular/core';
import { faHome, faShareAlt, faStar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ChangeTab } from 'src/app/actions/ui.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sidenavMenu = [
    {
      name: 'Home',
      icon: faHome,
      path: '/home',
      style: false
    },
    {
      name: 'Shared',
      icon: faShareAlt,
      path: '/shared',
      style: false
    },
    {
      name: 'Starred',
      icon: faStar,
      path: '/starred',
      style: true
    }
  ];

  selectedMenu = 'Home';

  constructor(private router: Router, public store: Store) { 
    // this.selectedMenu = this.sidenavMenu.find(i => i.path === this.router.url).name;
  }

  ngOnInit(): void {
  }

  onMenuChange(name: string) {
    const selection = this.sidenavMenu.find(i => i.name === name);
    this.selectedMenu = selection.name;
    this.store.dispatch(new ChangeTab(selection.name));
    this.router.navigate([selection.path]);
  }

}
