import { LoginState } from '@models/state/login.state';
import { User } from '@models/user';
import { createReducer, on } from '@ngrx/store';
import { auth, authSuccess } from '@state/actions/login.actions';

export const initialState: User = {
  id: '',
  email: '',
  name: '',
  role: '',
};

export const loginReducer = createReducer(
  initialState,
  on(authSuccess, (state, { user }) => ({
    ...state,
    email: user.email,
    name: user.name,
    role: user.role,
  }))
);
