import { createAction, props } from '@ngrx/store';
import { Food } from '../../interfaces/food.model';

export const loadData = createAction(
    '[Data Collection] Load Data',
);

export const loadedData = createAction(
    '[Data Collection] Loaded Data',
    props<{data: Food[]}>()
)