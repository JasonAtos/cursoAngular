import { orderState } from './../../models/restaurant.models';
import { createAction, props } from "@ngrx/store";


export const starOrders = createAction(
  "[Orders] Load orders"
)
export const loadOrders = createAction(
  "[Orders] Orders Loaded",
  props<orderState>()
)
export const loadTables = createAction(
  "[Orders] Load Tables",
  props<orderState>()
)
