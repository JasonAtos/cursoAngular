import { dessert } from './../../models/restaurant.models';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/state';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  itemsCollection !: AngularFirestoreCollection<dessert>;

  constructor(
    private store: AngularFirestore,
    private routing: Router,
    private ngrxStore: Store<AppState>
  ) {}

  getMenu(){
    return this.store.collection<dessert>('menu').valueChanges();
  }
}
