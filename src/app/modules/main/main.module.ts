import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { MainComponent } from './main.component';
import { HomeComponent } from '../../components/main/home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule
  ]
})
export class MainModule { }
