import { Food } from './food.model';
export interface DataState {
    loading: boolean;
    data: Food[];
}