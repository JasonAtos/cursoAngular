import { createAction, props } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { Food } from "src/models/food.model";
import { initialOrderState } from "../reducers/order.reducer";
import { OrderState } from "../state_models/state.models";


export type indexedProduct = {
  productIndex: number;
}

/**
 * @description this action sets back to initial state,
 */
export const loadInitialOrderState = createAction(
  "[Order State Action] Load Initial Order State",
);
/**
 * @description this action adds a new product to the current order state
 */
export const addProductToOrder = createAction(
  "[Order State Action] Append New Food Item To Order State",
  props<Food>(),
);
/**
 * @description this action removes a given product from the state based on position index
 */
export const removeProductFromOrder = createAction(
  "[Order State Action] Remove Food Item From Order State",
  props<indexedProduct>(),
);
/**
 * @description this action flushes the state
 * @yields this is used when all the items need to be dropped by action, either by creation of order or product drop
 */
export const flushProductsFromState = createAction(
  "[Order State Action] Flush Order State",
);



/**
 * @description THIS ARE OPERATION FUNCTIONS NEEDED ON THE REDUCER
 * @yields OPERATION FUNCTIONS
 */

export function appendProduct<T extends string>(prevState: OrderState, action: Food & TypedAction<T>): OrderState {
  return {
    ...prevState,
    foodItems: [...prevState.foodItems, action],
  };
}

export function removeProduct<T extends string>(prevState: OrderState, action: indexedProduct & TypedAction<T>): OrderState {
  const filteredItems: Array<Food> = prevState.foodItems.filter((_, i) => i !== action.productIndex);
  return {
    ...prevState,
    foodItems: [...filteredItems],
  };
}

export function resetOrderState<T extends string>(_:OrderState, action:TypedAction<T>):OrderState {
  return {
    ...action,
    ...initialOrderState,
  };
}