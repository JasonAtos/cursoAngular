import { OrderState } from "../state_models/state.models";
import { createReducer, on } from "@ngrx/store";
import { addProductToOrder, appendProduct, flushProductsFromState, loadInitialOrderState, removeProduct, removeProductFromOrder, resetOrderState } from "../actions/order.actions";

export const initialOrderState: OrderState = {
  foodItems: []
};


export const OrderReducer = createReducer(
  initialOrderState,
  on(
    loadInitialOrderState,
    flushProductsFromState,
    resetOrderState
  ),
  on(addProductToOrder, appendProduct),
  on(removeProductFromOrder, removeProduct)
);