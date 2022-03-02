import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { selectAuthenticated } from '../store/selectors/app.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  autorized: Observable<boolean> = new Observable();

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {}


  canActivate (): Observable<boolean> | Promise<boolean> | boolean  {
    return this.store.select(selectAuthenticated)
    .pipe(map((v => {
      if(v)return true;
      else {
        this.router.navigateByUrl('/login');
        return false;
      }
    })));
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
