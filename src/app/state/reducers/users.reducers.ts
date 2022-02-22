import { UserState } from '@models/state/user.state';
import { createReducer, on } from '@ngrx/store';
import { loadUsers, LoadUserSuccess } from '../actions/users.actions';
export const initialState: UserState = {
  users: [],
  loading: false,
  error: '',
};

//TODO: Reducers - users
export const userReducer = createReducer(
  initialState,
  /*  on(loadUsers, (state) => ({ ...state, loading: true })), */
  on(LoadUserSuccess, (state, { users }) => ({
    ...state,
    /*     loading: false, */
    users,
    /*  error: '', */
  }))
);
