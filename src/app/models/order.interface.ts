export interface order {
  order: number;
  table: number;
  status: string;
  items: item[];
}
export interface item {
  name: string;
  price: number;
  quantity: number;
}
