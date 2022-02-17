import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user';
import {
  Firestore,
  collectionData,
  collection,
  CollectionReference,
  DocumentData,
} from '@angular/fire/firestore';

/*  import { User } from '@models/user'; */
export interface Item {
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  /*   private mockUsers: User[] = [
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
  ]; */
  public item$!: Observable<User[]>;
  public collection2: any;

  constructor(firestore: Firestore) {
    /* this.collection2 = firestore.collection<User>(firestore, 'Users'); */
    /* collectionData(this.collection2).subscribe(console.log); */
    this.collection2 = collection(firestore, 'Users');
  }
  public getUsers(): Observable<User[]> {
    this.item$ = collectionData(this.collection2);
    return this.item$;
  } // getUsers
}
