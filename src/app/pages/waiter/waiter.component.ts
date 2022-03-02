import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPizza, selectBreakFast, selectDinner, selectTotal, selectBill } from '../../store/selectors/bill.selector';
import { manageBill, resetBill } from '../../store/actions/bill.actions';
import { BillState } from '../../interfaces/bill.state';
import { addOrder } from '../../store/actions/queue.actions';
import { PagesService } from '../../services/pages.service';
import { loadData } from '../../store/actions/data.actions';
import { selectData, selectLoading } from '../../store/selectors/data.selector';

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
  // data: Food[];
  data: Observable<any> = new Observable();
  loading: Observable<boolean> = new Observable();

  constructor(
    private pageService: PagesService,
    private store: Store<any>,
  ) {
    // this.data = pageService.getData();
    //el efecto, hace que en lugar de llamar al service, este pendiente, y se dispara
    //sin tener que llamar el service aqui, con el fin de que el componente quede
    //lo mas puro posible
  }

   ngOnInit(): void {
     this.breakFastState = this.store.select(selectBreakFast);
     this.pizzaState = this.store.select(selectPizza);
     this.dinnerState = this.store.select(selectDinner);
     this.totalState = this.store.select(selectTotal);
     this.billState = this.store.select(selectBill);
     this.store.dispatch(loadData());
     this.data = this.store.select(selectData);
     this.loading = this.store.select(selectLoading);
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
