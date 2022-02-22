import { Injectable } from '@angular/core';
import { UserState } from '@models/state/user.state';
import { User } from '@models/user';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '@services/user/users.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
@Injectable()
export class UsersEffects {
  //TODO: Select all users - effects

  public loadUsers$: Observable<{
    type: string;
    users: User[];
  }> = createEffect(() =>
    this.actions$.pipe(
      ofType('[Users] Load Users'),
      mergeMap(() =>
        this.userServices.getUsers().pipe(
          map((users) => ({ type: '[Users] Load Users Success', users })),
          catchError(() => EMPTY)
        )
      ),
      tap(console.log)
    )
  );
  //TODO: Add user - effects
  effectName$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Users] Add User'),
        tap((action: any) => console.log(action.user)),
        map((action: any) => {
          this.userServices.addUser(action.user);
        })
      ),
    { dispatch: false }
  );

  constructor(private userServices: UsersService, private actions$: Actions) {}
}
