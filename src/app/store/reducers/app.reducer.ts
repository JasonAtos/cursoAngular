import { createReducer, on } from '@ngrx/store';
import { UserState } from '../../interfaces/user.state';
import { login, logout } from '../actions/app.actions';

export const initialState: UserState = 
{
    email: '',
    password: '',
    authenticated: false
};

export const AppReducer = createReducer(
    initialState,
    on(login, (state, {status}) => {
        return {...state, authenticated: status};
    }),
    on(logout, (state) => {
        debugger;
        return {...state, authenticated: false}
    }),
);