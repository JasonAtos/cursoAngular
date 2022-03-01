import { Component, OnInit } from '@angular/core';
import { order } from '@models/order.interface';
import { OrdersService } from '@services/orders/orders.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
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

  public click(item: order): void {
    this.selectedOrder = item;
    console.log(item);
  }
}
