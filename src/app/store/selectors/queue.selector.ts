import { QueueState } from '../../interfaces/queue.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

const selectQueueFeature = (state: AppState) => state.order

export const selectOrders = createSelector(
    selectQueueFeature,
    (state: QueueState) => state.orders
)