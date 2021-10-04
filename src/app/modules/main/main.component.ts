import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "/main/home" },
      { label: 'About', icon: 'pi pi-fw pi-info-circle' },
      { label: 'Contact', icon: 'pi pi-fw pi-phone' }
    ];
  }
}