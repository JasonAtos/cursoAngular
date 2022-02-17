import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user';
/*  import { User } from '@models/user'; */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private mockUsers: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'jhon@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'jhon@gmail.com',
      password: '123456',
    },
  ];
  constructor() {}
  public getUsers(): Observable<User[]> {
    return of(this.mockUsers);
  } // getUsers
}
