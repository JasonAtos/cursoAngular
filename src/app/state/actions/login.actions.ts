import { User } from '@models/user';
import { createAction, props } from '@ngrx/store';

//TODO - Login - actions
export const login = createAction(
  '[Login] Login',
  props<{ user: { email: string; password: string } }>()
);
//TODO - Auth - actions
export const auth = createAction('[Login] Auth', props<{ uid: string }>());

//TODO - AuthSUCCESS - actions
export const authSuccess = createAction(
  '[Login] Auth Success',
  props<{ user: User }>()
);
