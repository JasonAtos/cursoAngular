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
  // TODO - GET USERS
  public getUsers(): Observable<User[]> {
    this.items = this.itemsCollection.valueChanges({ idField: 'id' });
    this.items.subscribe(console.log);
    return this.items;
  }
  //TODO - ADD USERS
  public addUser(user: User): void {
    this.itemsCollection.add(user);
  }
  //TODO - DELETE USERS
  public deleteUser(id: string): void {
    this.itemsCollection.doc(id).delete();
  }
  //TODO - UPDATE USERS
  public updateUser(user: User): void {
    this.itemsCollection.doc(user.id).update(user);
  }
}
