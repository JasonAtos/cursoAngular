import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: Observable<any>;

  constructor(
    private angularFireAuth: AngularFireAuth
  ) {
    this.userData = angularFireAuth.authState;
   }

   login(email:string, password:string) {
     return this.angularFireAuth.signInWithEmailAndPassword(email, password);
   }

   logout(){
     this.angularFireAuth.signOut();
   }
}
