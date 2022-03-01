import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Order } from '@models/order.interface';
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
  public getOrders(): Observable<Order[]> {
    return this.itemsCollection.valueChanges().pipe(
      map((res) => {
        return res.sort((a, b) => a.order - b.order);
      })
    );
  }
  public addOrder(order: number): void {
    console.log(order);
    let mockUp: Order = {
      order: 0,
      table: order,
      status: 'abierto',
      items: [
        {
          name: 'papas',
          price: 0,
          quantity: 0,
        },
      ],
    };
    this.itemsCollection.doc(order.toString()).set(mockUp);
  }

  public deleteOrder(order: number): void {
    this.itemsCollection.doc(order.toString()).delete();
  }
  public updateOrder(order: Order): void {
    this.itemsCollection.doc(order.order.toString()).update(order);
  }
}
