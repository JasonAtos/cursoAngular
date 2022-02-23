import { Component, OnInit } from '@angular/core';
import { Observable, map, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPizza, selectBreakFast, selectDinner, selectTotal } from '../../store/selectors/bill.selector';
import { manageBill } from '../../store/actions/bill.actions';

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

  constructor(
    private store: Store<any>,
  ) {
   }

   ngOnInit(): void {
     this.breakFastState = this.store.select(selectBreakFast);
     this.pizzaState = this.store.select(selectPizza);
     this.dinnerState = this.store.select(selectDinner);
     this.totalState = this.store.select(selectTotal);
   }

  incrementar(id: string){
    // combineLatest([this.breakFastState, this.pizzaState, this.dinnerState])
    // .subscribe((z,x,c) =>{
    //   console.log(z,x,c);      
    // })
    // .pipe(
    //   map(([breakFast, pizza, dinner]) => {
    //     this.validator(breakFast);
    //     this.validator(pizza);
    //     this.validator(dinner);
    //   })
    // )
    this.store.dispatch(manageBill({id, plus: true}));
    
  }

  decrementar(id: string){
    //si <0 entonces nel
    this.store.dispatch(manageBill({id, plus: false}));
  }

  validator(value:any){
    console.log(value);
    
  }

}
