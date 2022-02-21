import { UserState } from '@models/state/user.state';
import { createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers, LoadUserSuccess } from '../actions/users.actions';
export const initialState: UserState = {
  users: [],
  loading: false,
  error: '',
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(LoadUserSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    users,
    error: '',
  }))
);
