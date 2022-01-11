import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Mensaje } from '../interface/mensaje.interface';
import { addDoc, limit, orderBy, query } from "firebase/firestore"; 
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth";
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats$: Observable<Mensaje[]>;

  chat: Mensaje[] = [];

  public usuario:any = {};

  constructor(
    private fs: Firestore,
  ) 
  {
      const collect = collection(fs, 'chats');
      const q = query(collect, 
        orderBy('fecha', 'desc'), 
        limit(5));
      this.chats$ = collectionData<any>(q);    
  }

  cargarMensajes(){
   return this.chats$.pipe(
     map(m => {
       this.chat = [];
       m.forEach(item => {
         this.chat.unshift(item);
       });
      return m;
     })
   )
  }

  agregarMsj (mensaje: string){
    //falta uid
    let msj: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje,
      fecha: new Date().getTime(),
      uid: this.usuario.uid,
    };

    return addDoc(collection(this.fs,'chats'), msj);
  }

  login(proveedor:string){
    const auth = getAuth();
    const provider = proveedor === 'G' ? new GoogleAuthProvider() : new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {    
        console.log(result);
        this.usuario.nombre =  result.user.displayName;
        this.usuario.uid = result.user.uid;           
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;        
        // const user = result.user;        
      }).catch((err) => {   
        console.error(err);
        
        // const errorCode = error.code;
        // const errorMessage = error.message;        
        // const email = error.email;        
        // const credential = GoogleAuthProvider.credentialFromError(error);        
      });
  }

  logout(){

  }

}
