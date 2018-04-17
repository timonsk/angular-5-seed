import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '@core/services/auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    outlet: 'body'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
