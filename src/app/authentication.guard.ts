import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { User } from '@models/user';
import { State, Store } from '@ngrx/store';
import { AuthService } from '@services/auth/auth.service';
import { LoginService } from '@services/login/login.service';
import { AppState } from '@state/app.state';
import { selectUserName } from '@state/selectors/login.selector';
import { catchError, map, Observable, of, switchMap, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private route: Router,
    private fireAuth: AngularFireAuth,
    private loginService: LoginService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkUserLogin(route);
  }

  private checkUserLogin(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.fireAuth.authState.pipe(
      tap((user) => {
        console.log(user);
      }),
      switchMap((validate) => {
        if (validate) {
          return this.loginService.getDataUser(validate.uid);
        }
        return of({} as User);
      }),
      map((user: User) => {
        if (user.role === route.data['user']) {
          return true;
        }
        this.route.navigate(['/login']);
        return false;
      })
    );
  }
}
