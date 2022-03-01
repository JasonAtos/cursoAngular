import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { DataState } from '../../interfaces/data.state';

const selectDataFeature = (state: AppState) => state.data

export const selectData = createSelector(
    selectDataFeature,
    (state: DataState) => state.data
);

export const selectLoading = createSelector(
    selectDataFeature,
    (state: DataState) => state.loading
);