import { Component, OnInit } from '@angular/core';
import { faHome, faShareAlt, faStar, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';

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
      path: '/home'
    },
    {
      name: 'Shared',
      icon: faShareAlt,
      path: '/shared'
    },
    {
      name: 'Starred',
      icon: faStar,
      path: '/starred'
    },
    {
      name: 'Dashboard',
      icon: faChartLine,
      path: '/fashboard'
    },
  ]

  selectedMenu = 'Home';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMenuChange(name: string) {
    const selection = this.sidenavMenu.find(i => i.name === name);
    this.selectedMenu = selection.name;
    this.router.navigate([selection.path])
  }

}
