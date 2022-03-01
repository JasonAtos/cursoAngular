import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { order } from '@models/order.interface';
import { sortedChanges } from 'rxfire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private itemsCollection: AngularFirestoreCollection<any>;
  private items!: Observable<[]>;
  constructor(firestore: AngularFirestore) {
    this.itemsCollection = firestore.collection<any>('orders');
  }
  public getOrders(): Observable<order[]> {
    return this.itemsCollection.valueChanges().pipe(
      map((res) => {
        return res.sort((a, b) => a.order - b.order);
      })
    );
  }
  public addOrder(order: number): void {
    this.itemsCollection.doc(order.toString()).set(order);
  }
  public deleteOrder(order: number): void {
    this.itemsCollection.doc(order.toString()).delete();
  }
  public updateOrder(order: order): void {
    this.itemsCollection.doc(order.order.toString()).update(order);
  }
}
