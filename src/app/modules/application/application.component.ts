import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  display: boolean = false;

  items: MenuItem[] = [];
  menu_items: MenuItem[] = [];

  public displaySideBar(): void {
    this.display = true;
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Menu', icon: 'pi pi-fw pi-bars', command: () => this.displaySideBar(), },
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "/main/home" },
      { label: 'About', icon: 'pi pi-fw pi-info-circle' },
      { label: 'Contact', icon: 'pi pi-fw pi-phone' }
    ];

    this.menu_items = [
      { label: 'Dashboard', icon: 'pi pi-fw pi-bars' },
      { label: 'Shows', icon: 'pi pi-fw pi-desktop' },
      { label: 'Prices', icon: 'pi pi-fw pi-tag' }
    ];
  }
}
