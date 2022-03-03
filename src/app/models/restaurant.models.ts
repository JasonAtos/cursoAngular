export interface dessert{
  id: string;
  name: string;
  price: number;
  description: string;
}
export interface table{
  id: string;
  tableNumber : number;
}

export interface orderItem{
  dessert : dessert;
  quantity: number;
}
export interface orders{
  id?: string;
  tableId: string;
  order: orderItem[];
}

export interface orderState{
  loading : boolean;
  orders: orders[];
  tables: table[];
}
