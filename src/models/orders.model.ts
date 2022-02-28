import { Food } from "./food.model";

export interface Order {
  dishes:Array<Food>;
  state:state;
  waiter : WaiterInfo;
}

export interface WaiterInfo {
  uid:string;
  name:string;
}

export interface state {
  new:boolean;
  in_process:boolean;
  delivered:boolean;
}