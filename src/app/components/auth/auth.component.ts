import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import RouteConfigs from '../../configs/route.configs';
import { AuthService } from '@core/services/auth';

@Component({
  selector: 'm-app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public name: string;
  public password: string;
  public isLoginInProgress: boolean;
  public errorMessage: string;

  @ViewChild('authForm') currentForm: NgForm;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  public onSubmit() {

    if (this.currentForm && this.currentForm.valid) {

      this.auth.login(this.name, this.password)
        .subscribe(r => {
          this.router.navigate([RouteConfigs.appRoute]);
        },
        err => {
          this.errorMessage = 'Oops, something went wrong.Please try again later.';
          this.isLoginInProgress = false;
        }
        );
    }
  }
}
