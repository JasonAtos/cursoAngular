import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import { auth } from '@state/actions/login.actions';
import { AppState } from '@state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(fireAuth: AngularFireAuth, private store: Store<AppState>) {
    fireAuth.authState.subscribe((storedSession) => {
      if (storedSession) {
        store.dispatch(auth({ uid: storedSession.uid! }));
        console.log('sotredSession', storedSession);
      }
    });
  }
}
