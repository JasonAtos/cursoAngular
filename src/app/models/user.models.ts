
export interface User {
  id: string;
  name: string;
  age: number;
  roles: Roles;
}

// @ 1 kitchen == true <- kitchen
// @ 2 waiter == true <- waiter
// @ 3 2 == true <- admin
// @ 4 2 == false <-- not allowed user

export interface Roles {
  kitchen: boolean;
  waiter: boolean;
}
