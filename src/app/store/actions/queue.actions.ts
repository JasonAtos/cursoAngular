import { createAction, props } from '@ngrx/store';
import { BillState } from '../../interfaces/bill.state';

export const addOrder = createAction(
    '[Queue Collection] AddOrder',
    props<{order: BillState}>()
)

export const finishOrder = createAction(
    '[Queue Collection] ConfirmOrder',
    props<{id: number}>()
)