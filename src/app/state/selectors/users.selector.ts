import { createSelector } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { UserState } from '@models/state/user.state';
export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UserState) => state.users
);
