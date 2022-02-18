import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { User } from 'src/app/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private auth: AngularFireAuth,private  store : AngularFirestore) { }

  async login(email: string, password: string){
    try{
      this.auth.signInWithEmailAndPassword(email, password).then((userCredentials) => {
        this.store.doc<User>(`/users/${userCredentials.user!.uid}`).valueChanges().subscribe(console.log)
      })
      return this.auth.signInWithEmailAndPassword( email, password);
    }catch(err){
      return err;
    }
  }

  async register(email:string, password: string, userInfo: User){
    let userCreated: any
    try{
      this.auth.createUserWithEmailAndPassword(email, password).then((user)=> {
        userInfo.id = user.user!.uid
        console.log(userInfo);
        this.store.collection('users').add(userInfo).then(res => console.log(res));
        return userCreated
      }).catch(error => {
        return error.message
      })
    }catch(err){
      return err
    }

  }
}
