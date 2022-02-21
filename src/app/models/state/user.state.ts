import { User } from '@models/user';

export interface UserState {
  loading: boolean;
  error: string;
  users: User[];
}
