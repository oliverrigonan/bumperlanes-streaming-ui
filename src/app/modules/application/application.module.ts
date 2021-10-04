import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ApplicationRoutingModule } from './application-routing.module';

import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

import { ApplicationComponent } from './application.component';
import { DashboardComponent } from '../../components/application/dashboard/dashboard.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ApplicationRoutingModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    MenuModule
  ]
})
export class ApplicationModule { }
