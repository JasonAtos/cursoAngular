import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models/user';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private itemsCollection: AngularFirestoreCollection<Omit<User, 'id'>>;
  private items!: Observable<User[]>;

  constructor(firestore: AngularFirestore, private fireAuth: AngularFireAuth) {
    this.itemsCollection = firestore.collection<Omit<User, 'id'>>('Users');
  }
  // TODO - GET USERS
  public getUsers(): Observable<User[]> {
    this.items = this.itemsCollection.valueChanges({ idField: 'id' });
    /*   this.items.subscribe(console.log); */
    return this.items;
  }
  //TODO - ADD USERS
  public async addUser(user: User): Promise<void> {
    try {
      const resUser = await this.registerUser(user);
      this.itemsCollection.doc(resUser.user.uid).set({
        email: user.email,
        name: user.name,
        role: user.role,
      });
      console.log('User added');
    } catch {
      console.log('error');
    }
  }
  //TODO - DELETE USERS
  public deleteUser(id: string): void {
    this.itemsCollection.doc(id).delete();
  }
  //TODO - UPDATE USERS
  public updateUser(user: User): void {
    this.itemsCollection.doc(user.email).update(user);
  }
  //TODO - REGISTER USER - FIREBASE AUTH
  private registerUser(user: User): Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(
      user.email,
      user.password!
    );
  }
}
