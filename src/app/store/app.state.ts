import { ActionReducerMap } from '@ngrx/store';
import { UserState } from '../interfaces/user.state';
import { AppReducer } from './reducers/app.reducer';
import { BillState } from '../interfaces/bill.state';
import { BillReducer } from './reducers/bill.reducer';
import { QueueState } from '../interfaces/queue.state';
import { QueueReducer } from './reducers/queue.reducer';

export interface AppState {
    user: UserState,
    bill: BillState,
    order: QueueState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    user: AppReducer,
    bill: BillReducer,
    order: QueueReducer,
}