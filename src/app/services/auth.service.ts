import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable, of, share, Subject, switchMap, takeUntil, throwError } from 'rxjs';
import 'firebase/compat/auth';
import { User } from '../models/user.models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { flushSession, loadSession } from '../state/actions/user.actions';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
@Injectable({
  providedIn: 'root' // * @ singleton <-
})
export class AuthService {
  private persistenceHook: Subject<void> = new Subject<void>();
  constructor(
    private readonly authFire: AngularFireAuth,
    private readonly firestore: AngularFirestore,
    private readonly store: Store,
    private readonly router: Router,
  ) {
    this.checkIfLoggedIn();
  }

  public signIn(email: string, password: string): void {
    this.signInWithEmailAndPassword(email, password).pipe(switchMap(
      (userCredential) => {
        if (userCredential.user) {
          return this.retrieveUserbyUid(userCredential.user!.uid)
        } else {
          return throwError(() => this.userDoesNotExist());
        }
      }
    ))
    .subscribe({
      next: (user: User) => {
        this.dispatchUser(user);
      }
    });
  }

  public checkIfLoggedIn(): void {
    this.persistenceUser().pipe(takeUntil(this.persistenceHook))
    .subscribe({
      next: (user) => {
        if (user) {
          this.dispatchUser(user);
        }
        else {
          this.persistenceHook.next();
          this.persistenceHook.complete();
        }
      }
    })
  }

  private dispatchUser(user: User): void {
    if (user.roles.waiter || user.roles.kitchen) {
      this.store.dispatch(loadSession({
        session: true,
        user: { ...user }
      }));
      if (user.roles.waiter) {
        this.router.navigate(['/waiter']);
      } else {
        this.router.navigate(['/kitchen']);
      }
    } else {
      this.safeSignOut();
    }
  }

  private persistenceUser(): Observable<User | null> {
    return this.authFire.authState.pipe(switchMap((persistedUser) => persistedUser ? this.retrieveUserbyUid(persistedUser.uid) : of(null)));
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

  public async safeSignOut(): Promise<void> {
    try {
      await this.authFire.signOut();
      this.store.dispatch(flushSession());
      this.router.navigate(['/']);
      this.persistenceHook.next();
      this.persistenceHook.complete();
    } catch (error) {
      console.log(error);
    }
  }

}
