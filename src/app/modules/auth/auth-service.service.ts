import {
  loadInitialSession,
  loadSession,
  loadUser,
} from './../../state/actions';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.models';
import { AppState } from 'src/app/state/state';
import { CookieService } from 'ngx-cookie-service';
import {
  from,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private persistenceHook: Subject<void> = new Subject<void>();
  constructor(
    private auth: AngularFireAuth,
    private store: AngularFirestore,
    private routing: Router,
    private ngrxStore: Store<AppState>
  ) {}

  checkIfLogIn() {
    this.persistenceUser()
      .pipe(takeUntil(this.persistenceHook))
      .subscribe({
        next: (user) => {
          if (user) {
            this.dispatchUser(user);
          } else {
            this.persistenceHook.next();
            this.persistenceHook.complete();
          }
        },
      });
  }

  login(email: string, password: string) {
    this.loginEmailAndPassword(email, password)
      .pipe(
        switchMap((userCredential) => {
          if (userCredential.user) {
            return this.getUser(userCredential.user!.uid);
          } else {
            return throwError(this.userDoesNotExist());
          }
        })
      )
      .subscribe({ next: (user: User) => this.dispatchUser(user) });
  }

  loginEmailAndPassword(
    email: string,
    password: string
  ): Observable<firebase.default.auth.UserCredential> {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  getUser(uid: string) {
    return this.store
      .doc<User>(`/users/${uid}`)
      .valueChanges({ idField: 'id' }) as Observable<User>;
  }

  userDoesNotExist() {
    return new Error("This user doesn't exist");
  }

  private dispatchUser(user: User) {
    user.roles.kitchen || user.roles.waiter
      ? this.ngrxStore.dispatch(loadUser({ user: { ...user }, session: true }))
      : this.safeSignOut();

    user.roles.kitchen ? this.routing.navigate(['/kitchen']) : this.routing.navigate(['/waiter'])
  }

  private persistenceUser(): Observable<User | null> {
    return this.auth.authState.pipe(
      switchMap((persistedUser) =>
        persistedUser ? this.getUser(persistedUser.uid) : of(null)
      )
    );
  }

  public async safeSignOut(): Promise<void> {
    try {
      await this.auth.signOut();
      this.routing.navigate(['/login']);
      this.persistenceHook.next();
      this.persistenceHook.complete();
    } catch (error) {
      console.log(error);
    }
  }
}
