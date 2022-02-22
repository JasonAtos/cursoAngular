import { createAction, props } from '@ngrx/store';
import { User } from '@models/user';

//TODO - Select all users - actions
export const loadUsers = createAction('[Users] Load Users');

//TODO - IT´S TRIGGERED BY THE EFFECTS [Users] Load Users
export const LoadUserSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

//TODO - Add user - actions
export const addUser = createAction(
  '[Users] Add User',
  props<{ user: User }>()
);
//TODO - Delete user - actions
export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ id: string }>()
);
//TODO - Update user - actions
export const updateUser = createAction(
  '[Users] Update User',
  props<{ user: User }>()
);
