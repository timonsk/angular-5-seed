import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { Logger } from './services/logger';
import { SessionSettingsService } from './services/settings';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    Logger,
    AuthService,
    AuthGuard,
    SessionSettingsService
  ]
})
export class CoreModule { }
