import { ServiceService } from './../../service.service';
import { orders } from './../../../../models/restaurant.models';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { orderState } from 'src/app/models/restaurant.models';
import { starOrders } from 'src/app/state/actions/orders.actions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  order: orders = {
    tableId: 'CPAgFM7V59zkM0qfGFQ0',
    order:[
      {
        dessert : {
          id: '8I7sRHftjXwrtXRUO59h',
          description :"pa los fitness",
          name :"agua embotellada",
          price :15
        },
        quantity : 110
      }
    ]
  }

  constructor(private store: Store<orderState>, private service: ServiceService) {
  }

  ngOnInit(): void {
    this.store.dispatch(starOrders());
  }
}
