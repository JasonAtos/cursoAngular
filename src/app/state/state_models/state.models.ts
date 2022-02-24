import { User } from "src/app/models/user.models";
import { Food } from "src/models/food.model";

export interface UserState {
  session:boolean;
  user:User;
}

export interface OrderState {
  foodItems:Array<Food>;
}

export type RecursivePartial<T> = {
  [P in keyof T]?:
  T[P] extends (infer U)[] ? RecursivePartial<U>[] :
  T[P] extends object ? RecursivePartial<T[P]> :
  T[P];
};
