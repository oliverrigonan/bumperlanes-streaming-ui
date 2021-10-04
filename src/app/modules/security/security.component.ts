import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

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
