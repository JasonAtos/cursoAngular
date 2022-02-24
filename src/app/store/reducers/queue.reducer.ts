import { QueueState } from '../../interfaces/queue.state';
import { createReducer, on } from '@ngrx/store';
import { addOrder, finishOrder } from '../actions/queue.actions';
const initialState: QueueState = {
    orders: []
}

export const QueueReducer = createReducer(
    initialState,
    on(addOrder, (state, {order}):QueueState => {
        const newState:QueueState = JSON.parse(JSON.stringify(state));
       return {...newState, orders:[...state.orders, order ]};
    }),

    on(finishOrder, (state, {id}):QueueState => {
        const newState:QueueState = JSON.parse(JSON.stringify(state));
        newState.orders.splice(id, 1);
        return {...newState}
    })
)