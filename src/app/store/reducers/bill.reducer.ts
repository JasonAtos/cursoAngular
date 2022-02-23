import { createReducer, on } from '@ngrx/store';
import { BillState } from '../../interfaces/bill.state';
import { manageBill } from '../actions/bill.actions';

export const initialState: BillState = {
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
        const newState:BillState = JSON.parse(JSON.stringify(state));
        switch(id) {
            case "1":
                if(plus){
                    newState.orders.breakFast = newState.orders.breakFast + 1 ;
                    newState.total = newState.total + 50;
                }
                else{
                    if(newState.orders.breakFast > 0){
                        newState.orders.breakFast = newState.orders.breakFast - 1 ;
                        newState.total = newState.total - 50;
                    }
                }
                             
                break;
            case "2": 
                newState.orders.pizza = plus ? newState.orders.pizza + 1 : newState.orders.pizza -1;
                newState.total = plus ? newState.total + 250 : newState.total - 250;
                break;
            case "3": 
                newState.orders.dinner = plus ? newState.orders.dinner + 1 : newState.orders.dinner -1;
                newState.total = plus ? newState.total + 70 : newState.total - 70;
                break;
        }        
        return { ...newState };
    }),
)