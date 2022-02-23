import { User } from "./user.models";

export interface userState{
  session: boolean,
  user: User | undefined
}
