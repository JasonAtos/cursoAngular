import { OrderState } from '@models/state/order.state';
import { createReducer, on } from '@ngrx/store';
import { LoadOrdersSuccess, SelectItem } from '@state/actions/orders.actions';
export const initialState: OrderState = {
  loading: false,
  error: '',
  orders: [],
  selected: {
    order: 0,
    table: 0,
    items: [],
    status: '',
  },
};
export const ordersReducer = createReducer(
  initialState,
  on(LoadOrdersSuccess, (state, { orders }) => ({ ...state, orders })),
  on(SelectItem, (state, { order }) => ({ ...state, selected: order }))
);
