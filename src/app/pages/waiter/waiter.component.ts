import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPizza, selectBreakFast, selectDinner, selectTotal, selectBill } from '../../store/selectors/bill.selector';
import { manageBill, resetBill } from '../../store/actions/bill.actions';
import { BillState } from '../../interfaces/bill.state';
import { addOrder } from '../../store/actions/queue.actions';
import { Food } from '../../interfaces/food.model';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {
  breakFastState: Observable<number> = new Observable();
  pizzaState: Observable<number> = new Observable();
  dinnerState: Observable<number> = new Observable();
  totalState: Observable<number> = new Observable();
  billState: Observable<BillState> = new Observable();
  data: Food[];

  constructor(
    private pageService: PagesService,
    private store: Store<any>,
  ) {
    this.data = pageService.getData();
  }

   ngOnInit(): void {
     this.breakFastState = this.store.select(selectBreakFast);
     this.pizzaState = this.store.select(selectPizza);
     this.dinnerState = this.store.select(selectDinner);
     this.totalState = this.store.select(selectTotal);
     this.billState = this.store.select(selectBill);
   }

  incrementar(id: string){
    this.store.dispatch(manageBill({id, plus: true}));
  }

  decrementar(id: string){
    this.store.dispatch(manageBill({id, plus: false}));
  }

  confirm(launch = false){
    this.billState.subscribe((order: BillState) => {
     if (launch && order.total > 0){
       this.store.dispatch(addOrder({order}));
       this.store.dispatch(resetBill());
      }
      launch = false;
    })
  }

}
