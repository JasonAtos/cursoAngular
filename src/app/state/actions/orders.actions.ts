import { order } from '@models/order.interface';
import { createAction, props } from '@ngrx/store';

export const loadOrders = createAction('[Orders] Load Orders');

export const LoadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: order[] }>()
);
