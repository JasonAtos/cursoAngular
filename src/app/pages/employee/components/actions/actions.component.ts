import { Component, OnInit } from '@angular/core';
import { Order } from '@models/order.interface';
import { Store } from '@ngrx/store';
import { AddOrders, DeleteOrders } from '@state/actions/orders.actions';
import { AppState } from '@state/app.state';
import { selectOrders } from '@state/selectors/orders.selector';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  public tables: Order[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(): void {
    this.store.select(selectOrders).subscribe((res) => {
      this.tables = res;
    });
  }
  public addTable(): void {
    this.store.dispatch(AddOrders({ order: this.tables.length + 1 }));
  }
  public deleteTable(): void {
    this.store.dispatch(DeleteOrders({ order: this.tables.length }));
  }
}
