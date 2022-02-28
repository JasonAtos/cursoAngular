import { Injectable } from '@angular/core';
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
          map((users) => ({ type: '[Users] Load Users Success', users })), //TODO: triggers action [Users] Load Users Success with users
          catchError(() => EMPTY)
        )
      )
    )
  );
  //TODO: Add user - effects
  addUser$ = createEffect(
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
  //TODO: Delete user - effects
  deleteUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Users] Delete User'),
        tap((action: any) => console.log(action.id)),
        map((action: any) => {
          this.userServices.deleteUser(action.id);
        })
      ),
    { dispatch: false }
  );
  //TODO: Update user - effects
  updateUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Users] Update User'),
        tap((action: any) => console.log(action.user)),
        map((action: any) => {
          this.userServices.updateUser(action.user);
        })
      ),
    { dispatch: false }
  );

  constructor(private userServices: UsersService, private actions$: Actions) {}
}
