import { User } from "src/app/models/user.models";
import { Food } from "src/models/food.model";

export interface UserState {
  session:boolean;
  user:User;
}

export interface OrderState {
  foodItems:Array<Food>;
}