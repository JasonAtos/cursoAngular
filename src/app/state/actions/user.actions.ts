import { createAction, props } from "@ngrx/store";
import { UserState } from "../state_models/state.models";

export const loadUserInitialState = createAction(
  "[User Session State] Load First State",
);

export const loadSession = createAction(
  "[User Session State] Load new session state",
  props<UserState>(),
)

export const flushSession = createAction(
  "[User Session State] Flush session",
  props<UserState>(), //  * @ no need for props
)