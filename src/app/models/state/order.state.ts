import { Order } from '@models/order.interface';

export interface OrderState {
  loading: boolean;
  error: string;
  orders: Order[];
  selected: Order;
}
