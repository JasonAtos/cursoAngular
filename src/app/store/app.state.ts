import { ActionReducerMap } from '@ngrx/store';
import { UserState } from '../interfaces/user.state';
import { AppReducer } from './reducers/app.reducer';

export interface AppState {
    user: UserState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    user: AppReducer,
}