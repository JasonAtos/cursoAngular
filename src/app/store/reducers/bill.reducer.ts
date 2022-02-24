import { createReducer, on } from '@ngrx/store';
import { BillState } from '../../interfaces/bill.state';
import { manageBill, resetBill } from '../actions/bill.actions';
import { helper } from '../methods/logic';

const initialState: BillState = {
    total: 0,
    orders: {
        breakFast: 0,
        pizza: 0,
        dinner: 0,
    },
}

export const BillReducer = createReducer(
    initialState,
    on(manageBill, (state, {id, plus}):BillState => {
        return helper(id, state, plus);
    }),
    
    on(resetBill, (state): BillState => {
        state = initialState;
        return {...state}
    })
)