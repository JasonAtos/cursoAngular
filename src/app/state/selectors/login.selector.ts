import { User } from '@models/user';
import { createSelector } from '@ngrx/store';
import { AppState } from '@state/app.state';

export const selectLoginFeature = (state: AppState) => state.login;

export const selectUserName = createSelector(
  selectLoginFeature,
  (state: User) => state
);
