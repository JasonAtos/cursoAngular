import { OrderState } from '@models/state/order.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '@state/app.state';
export const selectOrdersFeature = (state: AppState) => state.orders;

export const selectOrders = createSelector(
  selectOrdersFeature,
  (state: OrderState) => state.orders
);
export const selectCurrentOrder = createSelector(
  selectOrdersFeature,
  (state: OrderState) => state.selected
);
