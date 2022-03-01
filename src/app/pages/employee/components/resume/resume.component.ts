import { Component, OnInit } from '@angular/core';
import { order } from '@models/order.interface';
import { OrdersService } from '@services/orders/orders.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
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
  public updateTable(): void {
    this.orderServices.updateOrder(this.selectedOrder);
  }
}
