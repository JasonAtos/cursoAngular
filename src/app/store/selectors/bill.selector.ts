import { createSelector } from '@ngrx/store';
import { BillState } from '../../interfaces/bill.state';
import { AppState } from '../app.state';

export const selectBillFeature = (state:AppState) => state.bill

export const selectBreakFast = createSelector(
    selectBillFeature,
    (state: BillState) => state.orders.breakFast
);

export const selectPizza = createSelector(
    selectBillFeature,
    (state: BillState) => state.orders.pizza
);

export const selectDinner = createSelector(
    selectBillFeature,
    (state: BillState) => state.orders.dinner
);

export const selectTotal = createSelector(
    selectBillFeature,
    (state: BillState) => state.total
);