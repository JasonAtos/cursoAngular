import { Component, OnInit } from '@angular/core';
import { Order } from '@models/order.interface';
import { Store } from '@ngrx/store';
import { SelectItem } from '@state/actions/orders.actions';
import { AppState } from '@state/app.state';
import { selectOrders } from '@state/selectors/orders.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  //TODO: Variables-Constants
  public tables: Order[] = [];
  public color: string = 'red';
  //TODO: Constructor
  constructor(private store: Store<AppState>) {}
  //TODO: ngOnInit
  ngOnInit(): void {
    this.getOrders();
  }
  //!: Functions
  //TODO: getOrders
  private getOrders(): void {
    this.store.select(selectOrders).subscribe((res) => {
      this.tables = res;
    });
  }
  //TODO: click- SelectItem
  public click(item: Order): void {
    this.store.dispatch(SelectItem({ order: item }));
  }
}
