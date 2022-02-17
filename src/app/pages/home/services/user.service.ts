import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {
  Firestore,
  collectionData,
  collection,
  CollectionReference,
  DocumentData,
} from '@angular/fire/firestore';

/*  import { User } from '@models/user'; */
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
  private itemsCollection: AngularFirestoreCollection<User>;
  items!: Observable<User[]>;

  constructor(firestore: AngularFirestore) {
    this.itemsCollection = firestore.collection<User>('Users');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(console.log)

  }
  public getUsers(): Observable<User[]> {

    return this.items;
  } // getUsers
}
