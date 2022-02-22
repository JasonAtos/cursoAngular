import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from '../../interfaces/user.state';

export const selectorAppFeature = (state: AppState) => state.user;

export const selectAuthenticated = createSelector(
    selectorAppFeature,
    (state: UserState) => state.authenticated
)