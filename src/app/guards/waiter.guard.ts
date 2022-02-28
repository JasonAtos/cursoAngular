import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { activeSessionSelector, activeUserSelector } from '../state/selectors';
import { User } from '../models/user.models';
import { AppState } from '../state/state';

@Injectable({
  providedIn: 'root'
})
export class WaiterGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user!: User;
      this.store.select(activeUserSelector).subscribe((response) => {
        if (response) {
          user = response;
        } else {
          this.router.navigate([``]);
        }
      });
      if (user.roles.waiter) {
        return user.roles.waiter;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }

}
