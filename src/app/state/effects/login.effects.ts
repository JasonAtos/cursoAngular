import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@services/auth/auth.service';
import { LoginService } from '@services/login/login.service';
import { catchError, EMPTY, map, mergeMap, Observable, tap } from 'rxjs';

@Injectable()
export class LoginEffects {
  public login$: Observable<{
    type: string;
    user: Pick<User, 'email' | 'password'>;
  }> = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Login] Login'),
        tap(console.log),
        mergeMap(
          (action: any) => this.loginServices.login(action.user)
          /* .pipe(
          map((user) => ({ type: '[Login] Login Success', user })),
          catchError(() => EMPTY)
        ) */
        ),
        tap((res) => {
          this.auth.auth();
          this.router.navigate(['/home']);
        }),
        tap(console.log)
      ),
    { dispatch: false }
  );

  public auth$: Observable<{
    type: string;
    user: User;
  }> = createEffect(() =>
    this.actions$.pipe(
      ofType('[Login] Auth'),
      tap(console.log),
      mergeMap((action: any) => this.loginServices.getDataUser(action.uid)),
      tap((user) => console.log(user)),
      map((user: User) => ({ type: '[Login] Auth Success', user }))
    )
  );

  constructor(
    private actions$: Actions,
    private loginServices: LoginService,
    private auth: AuthService,
    private router: Router
  ) {}
}
