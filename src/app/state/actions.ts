import { userState } from './../models/user.state';
import { createAction, props } from "@ngrx/store";


export const loadInitialSession = createAction(
  "[Login] Initial Session"
)

export const loadSession = createAction(
  "[Login] Load Session",
  props<userState>()
)
