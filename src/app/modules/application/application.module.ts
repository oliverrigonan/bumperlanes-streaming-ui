import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from '../../components/application/dashboard/dashboard.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
