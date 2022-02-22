import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, from, Observable, switchMap, throwError } from 'rxjs';
import 'firebase/compat/auth';
import { User } from '../models/user.models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$:BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null); // * @ real time user
  constructor(
    private readonly authFire: AngularFireAuth,
    private readonly firestore: AngularFirestore
  ) { }

  public signIn(email: string, password: string): void {
    this.signInWithEmailAndPassword(email, password).pipe(switchMap(
      (userCredential) => {
        if (userCredential.user) {
          return this.retrieveUserbyUid(userCredential.user!.uid)
        } else {
          return throwError(() => this.userDoesNotExist());
        }
      }
    )).subscribe(console.log);
  }

  private signInWithEmailAndPassword(email: string, password: string): Observable<firebase.default.auth.UserCredential> {
    return from(this.authFire.signInWithEmailAndPassword(email, password));
  }

  private retrieveUserbyUid(uid: string): Observable<User> {
    return this.firestore.doc<User>(`/users/${uid}`).valueChanges({ idField: 'id' }) as Observable<User>;
  }

  private userDoesNotExist(): Error {
    return new Error('This user doesn\'t exist');
  }


}
