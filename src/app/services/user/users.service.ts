import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models/user';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private itemsCollection: AngularFirestoreCollection<User>;
  items!: Observable<User[]>;

  constructor(firestore: AngularFirestore) {
    this.itemsCollection = firestore.collection<User>('Users');
  }

  public getUsers(): Observable<User[]> {
    this.items = this.itemsCollection.valueChanges({ idField: 'id' });
    this.items.subscribe(console.log);
    return this.items;
  }
  public addUser(user: User): void {
    this.itemsCollection.add(user);
  }
}
