import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './page/login-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [ // componetes, pipes, directivas
    LoginPageComponent, RegisterFormComponent
  ],
  imports: [ // son otros modulos
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
