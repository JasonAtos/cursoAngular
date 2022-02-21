import { User } from "src/models/user.model";
import { createReducer, on } from "@ngrx/store";
import { UserState } from "../state_models/state.models";
import { flushSession, loadSession, loadUserInitialState } from "../actions/user.actions";


export const initialUserState: UserState = {
  session: false,
  user: null as unknown as User,
}

/**
 * @description user reducer, used '_' for previous unused value and '__' for new state unsused value
 */

export const UserReducer = createReducer(
  initialUserState,
  on(loadUserInitialState, () => ({ ...initialUserState })),
  on(loadSession, (oldState, Action) => ({ ...Action })),
  on(flushSession, (_, __) => ({ ...initialUserState })),
)