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
      { label: 'Menu', icon: '', command: () => this.displaySideBar(), },
      { label: 'Dashboard', icon: 'pi pi-fw pi-bars' },
      { label: 'Shows', icon: 'pi pi-fw pi-desktop' },
      { label: 'Prices', icon: 'pi pi-fw pi-tag' }
    ];

    this.menu_items = [
      { label: 'Dashboard', icon: 'pi pi-fw pi-bars' },
      { label: 'Shows', icon: 'pi pi-fw pi-desktop' },
      { label: 'Prices', icon: 'pi pi-fw pi-tag' }
    ];
  }
}
