import { createSelector } from "@ngrx/store";
import { AppState } from "../state";
import { UserState } from "../state_models/state.models";

const userSelector = (state: AppState) => state.user;
/**
 * @description this selectors returns the whole user session state object
 */
export const selectUserFullState = createSelector(
  userSelector,
  (state: UserState) => state
)
/**
 * @description this selector returns the session state
 */
export const selectUserHasActiveSession = createSelector(
  userSelector,
  (state: UserState) => state.session,
)
/**
 * @description this selector returns the user data object
 */
export const selectUserInformation = createSelector(
  userSelector,
  (state: UserState) => state.user
);
/**
 * @description this selector return the current user roles
 */
export const selectUserRoles = createSelector(
  userSelector,
  (state: UserState) => state.user?.roles
)

export const selectUserIsKitchen = createSelector(
  userSelector,
  (state: UserState) => state.user?.roles.kitchen
);

export const selectUserIsWaiter = createSelector(
  userSelector,
  (state:UserState) => state.user?.roles.waiter
);