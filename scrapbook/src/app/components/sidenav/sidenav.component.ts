import { Component, OnInit } from '@angular/core';
import { faHome, faShareAlt, faStar, faChartLine } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  sidenavMenu = [
    {
      name: 'Home',
      icon: faHome
    },
    {
      name: 'Shared',
      icon: faShareAlt
    },
    {
      name: 'Starred',
      icon: faStar
    },
    {
      name: 'Dashboard',
      icon: faChartLine
    }
  ]

  selectedMenu = 'Home';

  constructor() { }

  ngOnInit(): void {
  }

  onMenuChange(name: string) {
    this.selectedMenu = this.sidenavMenu.find(i => i.name === name).name;
  }

}
