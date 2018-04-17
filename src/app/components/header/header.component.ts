import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RouteConfigs from '../../configs/route.configs';
import { AuthService } from '@core/services/auth';

@Component({
  selector: 'm-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }
  public logout() {
    this.auth.logout().subscribe(r => {
      this.router.navigate([RouteConfigs.loginRoute]);
    });
  }
}
