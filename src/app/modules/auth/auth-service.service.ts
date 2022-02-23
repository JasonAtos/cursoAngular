import { loadInitialSession, loadSession } from './../../state/actions';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.models';
import { AppState } from 'src/app/state/state';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(
    private auth: AngularFireAuth,
    private store: AngularFirestore,
    private routing: Router,
    private ngrxStore: Store<AppState>
  ) {
    this.ngrxStore.dispatch(loadInitialSession())
  }

  async login(email: string, password: string): Promise<void> {
    let errorMessage: string = '';
    try {
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          this.store
            .doc<User>(`/users/${userCredentials.user!.uid}`)
            .valueChanges()
            .subscribe({
              next: (User) => {
                const validSession:boolean = User!.roles.kitchen || User!.roles.waiter
                if(validSession){
                  this.ngrxStore.dispatch(loadSession({
                    session: validSession,
                    user: User
                  }));
                  this.routing.navigate(['/'])
                }else{
                  this.ngrxStore.dispatch(loadInitialSession());
                }
              }
            });
        });
    } catch (err) {
      errorMessage = `${err}`;
    }
    return;
  }

  async register(
    email: string,
    password: string,
    userInfo: User
  ): Promise<any> {
    let userCreated: User;
    try {
      this.auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          userInfo.id = user.user!.uid;
          this.store
            .collection('users')
            .add(userInfo)
            .then((res) => console.log(res));
          return userCreated;
        })
        .catch((error) => {
          return `${error.message}`;
        });
    } catch (err) {
      return 'oops we have come troubles';
    }
  }
}
