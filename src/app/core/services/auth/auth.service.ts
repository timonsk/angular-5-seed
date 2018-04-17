import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SessionSettingsService } from '../settings';
import { UserData } from '@models/auth';

@Injectable()
export class AuthService {

  constructor(private session: SessionSettingsService) { }

  public isAuthenticated(): boolean {
    return this.session.isTokenExpired();
  }

  public login(name: string, password: string): Observable<UserData> {
    const user = new UserData(name, 'admin');
    this.session.createNewSession(user);
    return Observable.of(user);
  }

  public logout(): Observable<void> {
    this.session.removeSession();
    return Observable.of();
  }
}
