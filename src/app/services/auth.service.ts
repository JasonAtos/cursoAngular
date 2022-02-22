import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { login, logout } from '../store/actions/app.actions';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: Observable<any>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private store: Store<AppState>,
  ) {
    this.userData = angularFireAuth.authState;
   }

   login(email:string, password:string) {
    let status = false;
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        status = true;        
      })
      .catch(() => {
        status= false;
      })
      .finally(()=> {        
        this.store.dispatch(login({status}));
      })

   }

   logout(){
     this.angularFireAuth.signOut();
     this.store.dispatch(logout());
   }
}
