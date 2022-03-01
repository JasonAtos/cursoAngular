import { DataState } from '../../interfaces/data.state';
import { createReducer, on } from '@ngrx/store';
import { loadData, loadedData } from '../actions/data.actions';

const initialState: DataState = {
    loading: false,
    data: [],
}

export const DataReducer = createReducer(
    initialState,
    on(loadData, (state): DataState => {
        return {...state, loading: true}
    }),

    on(loadedData, (state, {data}):DataState => {
        return {...state, loading: false, data}
    })


);