import { userState } from './../models/user.state';
import { sessionReducer } from './reducers/reducers';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
  user: userState;
}

export const APP_ROOT_STATE_REDUCERS: ActionReducerMap<AppState> = {
  user : sessionReducer
};
