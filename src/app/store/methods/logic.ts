import { BillState } from '../../interfaces/bill.state';

export function helper(id: string, state: BillState, plus: boolean): BillState {
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
            if(plus){
                newState.orders.pizza =  newState.orders.pizza + 1 ;
                newState.total =  newState.total + 250;
            }
            else{
                if(newState.orders.pizza  > 0){
                    newState.orders.pizza = newState.orders.pizza -1;
                    newState.total = newState.total - 250;
                }
            }
            break;
        case "3": 
        if(plus){
            newState.orders.dinner = newState.orders.dinner + 1;
            newState.total = newState.total + 70;
        }
        else{
            if(newState.orders.dinner > 0){
                newState.orders.dinner = newState.orders.dinner - 1;
                newState.total = newState.total - 70;
            }
        }
            break;
    }   
    return {...newState};
}