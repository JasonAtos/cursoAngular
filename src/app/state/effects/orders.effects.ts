import { Injectable } from '@angular/core';
import { order } from '@models/order.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdersService } from '@services/orders/orders.service';
import { catchError, EMPTY, map, mergeMap, Observable } from 'rxjs';

@Injectable()
export class OrdersEffects {
  public loadOrders$: Observable<{
    type: string;
    orders: order[];
  }> = createEffect(() =>
    this.actions$.pipe(
      ofType('[Orders] Load Orders'),
      mergeMap(() =>
        this.ordersService.getOrders().pipe(
          map((orders) => ({ type: '[Orders] Load Orders Success', orders })), //TODO: triggers action [Orders] Load Orders Success with orders
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {}
}
