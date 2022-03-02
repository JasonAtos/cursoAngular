import { SelectorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Order } from '@models/order.interface';
import { Store } from '@ngrx/store';
/* import { OrdersService } from '@services/orders/orders.service';
 */ import { SelectItem, updateOrder } from '@state/actions/orders.actions';
import { AppState } from '@state/app.state';
import {
  selectCurrentOrder,
  selectOrders,
} from '@state/selectors/orders.selector';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public tables: Order[] = [];
  public selectedOrder: Order = {
    order: 0,
    table: 0,
    status: '',
    items: [
      {
        name: '',
        price: 0,
        quantity: 0,
      },
    ],
  };
  constructor(
    /*     private orderServices: OrdersService,
     */ private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.getOrders();
  }
  private getOrders(): void {
    this.store.select(selectCurrentOrder).subscribe((res) => {
      this.selectedOrder = res;
      console.log(res);
    });
  }
  public updateTable(): void {
    console.log(this.selectedOrder);
    /*     this.selectedOrder.items.push({
      name: 'Villegas',
      price: 10,
      quantity: 10,
    }); */

    let copySelectOrder!: Order;
    copySelectOrder = cloneDeep(this.selectedOrder);

    copySelectOrder.items.push({
      name: 'Villegas',
      price: 10,
      quantity: 10,
    });
    console.log(copySelectOrder);

    this.store.dispatch(updateOrder({ order: copySelectOrder }));
    /*     this.store.dispatch(SelectItem({ order: copySelectOrder }));
     */
    /* this.orderServices.updateOrder(this.selectedOrder); */
  }
}
