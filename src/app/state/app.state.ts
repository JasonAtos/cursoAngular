import { OrderState } from '@models/state/order.state';
import { UserState } from '@models/state/user.state';
import { User } from '@models/user';
import { ActionReducerMap } from '@ngrx/store';
import { loginReducer } from './reducers/login.reducer';
import { ordersReducer } from './reducers/orders.reducers';
import { userReducer } from './reducers/users.reducers';
export interface AppState {
  users: UserState;
  login: User;
  orders: OrderState;
}
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: userReducer,
  login: loginReducer,
  orders: ordersReducer,
};
