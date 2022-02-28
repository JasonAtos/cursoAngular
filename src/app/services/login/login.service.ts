import { Injectable } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from '@models/user';
import { AuthService } from '@services/auth/auth.service';
import { auth } from '@state/actions/login.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private itemsCollection: AngularFirestoreCollection<User>;
  //  private items!: Observable<User>;
  private items!: Observable<any>;

  constructor(
    private fireAuth: AngularFireAuth,
    firestore: AngularFirestore,
    private auth: AuthService
  ) {
    this.itemsCollection = firestore.collection<User>('Users');
  }
  // TODO - LOGIN USER
  public async login(user: Pick<User, 'email' | 'password'>): Promise<any> {
    try {
      console.log('login success');
      const res = await this.fireAuth.signInWithEmailAndPassword(
        user.email,
        user.password!
      );
      this.fireAuth.setPersistence('local');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public getDataUser(uid: string): Observable<any> {
    this.items = this.itemsCollection.doc<User>(uid).valueChanges()!;
    return this.items;
  }
}
