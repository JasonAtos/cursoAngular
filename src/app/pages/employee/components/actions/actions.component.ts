import { Component, OnInit } from '@angular/core';
import { order } from '@models/order.interface';
import { OrdersService } from '@services/orders/orders.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  public tables: order[] = [];
  public selectedOrder: order = {
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
  constructor(private orderServices: OrdersService) {}

  ngOnInit(): void {}
  public addTable(): void {
    this.orderServices.addOrder(this.tables.length + 1);
  }
  public deleteTable(): void {
    this.orderServices.deleteOrder(this.tables.length);
  }
}
