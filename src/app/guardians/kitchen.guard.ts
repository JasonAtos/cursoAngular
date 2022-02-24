import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectUserIsKitchen } from '../state/selectors/user.selector';
import { AppState } from '../state/state';

@Injectable({
  providedIn: 'root'
})
export class KitchenGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.reroute();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.reroute();
  }

  private reroute(): Observable<boolean | UrlTree> {
    return this.store.select(selectUserIsKitchen).pipe(map((kitchenRole) => kitchenRole || this.router.createUrlTree(['/'])));
  }

}
