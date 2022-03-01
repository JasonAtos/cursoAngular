import { Order } from '@models/order.interface';
import { createAction, props } from '@ngrx/store';

export const loadOrders = createAction('[Orders] Load Orders');

export const LoadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: Order[] }>()
);

export const AddOrders = createAction(
  '[Orders] Add Orders',
  props<{ order: number }>()
);
export const DeleteOrders = createAction(
  '[Orders] Delete Orders',
  props<{ order: number }>()
);
export const SelectItem = createAction(
  '[Orders] Select Item',
  props<{ order: Order }>()
);
