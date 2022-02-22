import { OrderState, UserState } from "./state_models/state.models";
import { ActionReducerMap } from "@ngrx/store";
import { UserReducer } from "./reducers/user.reducers";
import { OrderReducer } from "./reducers/order.reducer";

export interface AppState {
  user:UserState;
  order:OrderState;
}

export const APP_STATE_REDUCERS:ActionReducerMap<AppState> = {
  user:UserReducer,
  order:OrderReducer,
}