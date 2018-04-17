import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import RouteConfigs from '../../configs/route.configs';

const loginRoutes: Routes = [
  {
    path: RouteConfigs.loginRoute,
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule { }
