import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.module.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
