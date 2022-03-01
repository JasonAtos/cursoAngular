import { Component, OnInit } from '@angular/core';
import { Order } from '@models/order.interface';
import { Store } from '@ngrx/store';
import { OrdersService } from '@services/orders/orders.service';
import { loadOrders } from '@state/actions/orders.actions';
import { AppState } from '@state/app.state';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  public tables: Order[] = [];
  public selectedOrder!: Order;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadOrders());
  }
}
