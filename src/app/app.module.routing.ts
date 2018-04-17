import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth';
import { PageNotFoundComponent } from './shared/page-not-found';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header';
import { AuthGuard } from '@core/services/auth/auth.guard';

const mainRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: AppComponent,
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes, {
      enableTracing: true,
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
