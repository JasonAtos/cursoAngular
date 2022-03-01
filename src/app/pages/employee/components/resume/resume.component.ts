import { Component, OnInit } from '@angular/core';
import { Order } from '@models/order.interface';
import { Store } from '@ngrx/store';
import { OrdersService } from '@services/orders/orders.service';
import { AppState } from '@state/app.state';
import { selectCurrentOrder } from '@state/selectors/orders.selector';

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
    private orderServices: OrdersService,
    private store: Store<AppState>
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
    this.orderServices.updateOrder(this.selectedOrder);
  }
}
