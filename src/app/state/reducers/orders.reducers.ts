import { order } from '@models/order.interface';
import { createReducer, on } from '@ngrx/store';
import { LoadOrdersSuccess } from '@state/actions/orders.actions';
export const initialState: order[] = [
  {
    order: 0,
    table: 0,
    status: '',
    items: [
      {
        name: '',
        price: 0,
        quantity: 0,
      },
    ],
  },
];
export const ordersReducer = createReducer(
  initialState,
  on(LoadOrdersSuccess, (state, { orders }) => ({ ...state, orders }))
);
