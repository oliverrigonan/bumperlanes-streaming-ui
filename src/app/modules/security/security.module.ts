import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SecurityRoutingModule } from './security-routing.module';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { SecurityComponent } from './security.component';
import { LoginComponent } from '../../components/security/login/login.component';
import { RegisterComponent } from '../../components/security/register/register.component';

@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SecurityRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ]
})
export class SecurityModule { }
