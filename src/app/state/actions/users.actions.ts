import { createAction, props } from '@ngrx/store';
import { User } from '@models/user';

export const loadUsers = createAction('[Users] Load Users');
export const LoadUserSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const addUser = createAction(
  '[Users] Add User',
  props<{ user: User }>()
);
