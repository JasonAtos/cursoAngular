import { UserState } from '@models/state/user.state';
import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './reducers/users.reducers';
export interface AppState {
  users: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: userReducer,
};
