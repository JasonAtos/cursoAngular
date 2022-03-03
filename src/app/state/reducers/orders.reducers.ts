import { orderState, orders } from './../../models/restaurant.models';
import { createReducer, on } from '@ngrx/store';
import { starOrders, loadTables, loadOrders } from '../actions/orders.actions';

export const initialOrderState: orderState ={
  loading: true,
  orders: [],
  tables: []
}

export const sessionReducer = createReducer(
  initialOrderState,
  on(starOrders, (initState) => ({...initState}) ),
  on(loadOrders, (initState, props) => {
   return {...initState, loading: true, orders: props.orders, tables: []}
  }),
  on(loadTables, (initState, props) => {
    return {...initState, loading: false, tables: props.tables}
  })
)

