import { ActionReducerMap } from '@ngrx/store';
import { UserState } from '../interfaces/user.state';
import { AppReducer } from './reducers/app.reducer';
import { BillState } from '../interfaces/bill.state';
import { BillReducer } from './reducers/bill.reducer';
import { QueueState } from '../interfaces/queue.state';
import { QueueReducer } from './reducers/queue.reducer';
import { DataState } from '../interfaces/data.state';
import { DataReducer } from './reducers/data.reducer';

export interface AppState {
    user: UserState,
    bill: BillState,
    order: QueueState,
    data: DataState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    user: AppReducer,
    bill: BillReducer,
    order: QueueReducer,
    data: DataReducer,
}