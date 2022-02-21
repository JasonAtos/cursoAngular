import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models/user';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

/*  import { User } from '@models/user'; */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private itemsCollection: AngularFirestoreCollection<User>;
  items!: Observable<User[]>;

  constructor(firestore: AngularFirestore) {
    this.itemsCollection = firestore.collection<User>('Users');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(console.log);
  }

  public getUsers(): Observable<User[]> {
    return this.items;
  }
}
