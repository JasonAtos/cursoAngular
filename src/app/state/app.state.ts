import { LoginState } from '@models/state/login.state';
import { UserState } from '@models/state/user.state';
import { User } from '@models/user';
import { ActionReducerMap } from '@ngrx/store';
import { loginReducer } from './reducers/login.reducer';
import { userReducer } from './reducers/users.reducers';
export interface AppState {
  users: UserState;
  login: User;
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: userReducer,
  login: loginReducer,
};
