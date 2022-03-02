import { UserState } from '@models/state/user.state';
import { createReducer, on } from '@ngrx/store';
import { LoadUserSuccess } from '../actions/users.actions';
export const initialState: UserState = {
  users: [],
  loading: false,
  error: '',
};

//TODO: Reducers - users
export const userReducer = createReducer(
  initialState,
  on(LoadUserSuccess, (state, { users }) => ({
    ...state,
    users,
  }))
);
