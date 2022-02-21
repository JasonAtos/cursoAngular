export interface User {
  id: string;
  age: number;
  name: string;
  roles: Roles;
}
export interface Roles {
  kitchen: boolean;
  waiter: boolean;
}