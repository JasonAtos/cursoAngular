import { activeUserSelector } from '../state/selectors/selectors';
import { AppState } from 'src/app/state/state';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { activeSessionSelector } from '../state/selectors/selectors';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class KitchendGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let user!: User;
    this.store.select(activeUserSelector).subscribe((response) => {
      if (response) {
        user = response;
      } else {
        this.router.navigate([``]);
      }
    });
    if (user.roles.kitchen) {
      return user.roles.kitchen;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}





