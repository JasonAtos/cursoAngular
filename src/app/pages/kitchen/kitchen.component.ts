import { Component, OnInit } from '@angular/core';
import { selectOrders } from '../../store/selectors/queue.selector';
import { Observable } from 'rxjs';
import { BillState } from '../../interfaces/bill.state';
import { Store } from '@ngrx/store';
import { finishOrder } from '../../store/actions/queue.actions';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
  queueState: Observable<BillState[]> = new Observable();
  x = 0;
  bills:BillState[] = [];

  constructor(
    private store: Store<any>,
    ) {}
    
  ngOnInit(): void {
    this.queueState = this.store.select(selectOrders);
    this.queueState.subscribe((billArray:BillState[]) => {
      this.x = billArray.length;
      this.bills = billArray;
    })
  }

  finishOrder(id: number) {
    this.store.dispatch(finishOrder({id}))
  }

}
