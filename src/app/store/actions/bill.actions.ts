import { createAction, props } from '@ngrx/store';

export const manageBill = createAction(
    '[Bill Collection] RemoveFood',
    props<{id: string, plus:boolean}>()
);

export const calculateTotal = createAction(
    '[Bill Collection] CalculateTotal',
    props<{id: string}>()
);