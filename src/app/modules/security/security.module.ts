import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SecurityRoutingModule } from './security-routing.module';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

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
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SecurityRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ]
})
export class SecurityModule { }
