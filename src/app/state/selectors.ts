import { userState } from './../models/user.state';
import { createSelector } from "@ngrx/store";
import { AppState } from "./state";

export const selecUserSession = (state:AppState) => state.user;

export const activeSessionSelector = createSelector(
  selecUserSession,
  (sessionState:userState) => sessionState.session
);
export const activeUserSelector = createSelector(
  selecUserSession,
  (sessionState:userState) => sessionState.user
);
