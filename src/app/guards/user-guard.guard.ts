import { AppState } from 'src/app/state/state';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { activeSessionSelector } from '../state/selectors';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private store:Store<AppState>, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let isSessionActive: boolean = false;
     this.store.select(activeSessionSelector).subscribe(session => {
        isSessionActive = session
      })
      if(!isSessionActive){
        this.router.navigate([`login`]);
        return false;
      }else{
        return true;
      }
  }

}
