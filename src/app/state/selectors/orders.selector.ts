import { order } from '@models/order.interface';
import { createSelector } from '@ngrx/store';
import { AppState } from '@state/app.state';
export const selectOrdersFeature = (state: AppState) => state.orders;

export const selectOrders = createSelector(
  selectOrdersFeature,
  (state: order[]) => state
);
