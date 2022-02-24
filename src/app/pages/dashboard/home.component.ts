import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { Food } from '../../interfaces/food.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBreakFast, selectPizza, selectDinner } from '../../store/selectors/bill.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DashboardComponent implements OnInit {

  breakFastState: Observable<number> = new Observable();
  pizzaState: Observable<number> = new Observable();
  dinnerState: Observable<number> = new Observable();
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
  }
}
