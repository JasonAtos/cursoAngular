export interface Order {
  order: number;
  table: number;
  status: string;
  items: Item[];
}
export interface Item {
  name: string;
  price: number;
  quantity: number;
}
