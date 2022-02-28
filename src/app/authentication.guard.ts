import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { User } from '@models/user';
import { State, Store } from '@ngrx/store';
import { AuthService } from '@services/auth/auth.service';
import { AppState } from '@state/app.state';
import { selectUserName } from '@state/selectors/login.selector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(
    private route: Router,
    private store: Store<AppState>,
    private auth: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /* return this.checkUserLogin(route); */
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  private checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    let permises = true;
    this.auth.auth();
    this.store.select(selectUserName).subscribe((user: User) => {
      console.log(user);
      if (user.role !== 'Waiter') {
        //  this.route.navigate(['/login']);
        permises = false;
      }
    });
    return permises;
  }
}
