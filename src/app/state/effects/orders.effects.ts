import { Injectable } from '@angular/core';
import { Order } from '@models/order.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdersService } from '@services/orders/orders.service';
import { catchError, EMPTY, map, mergeMap, Observable, tap } from 'rxjs';

@Injectable()
export class OrdersEffects {
  public loadOrders$: Observable<{
    type: string;
    orders: Order[];
  }> = createEffect(() =>
    this.actions$.pipe(
      ofType('[Orders] Load Orders'),
      mergeMap(() =>
        this.ordersService.getOrders().pipe(
          map((orders: Order[]) => ({
            type: '[Orders] Load Orders Success',
            orders: orders,
          })), //TODO: triggers action [Orders] Load Orders Success with orders
          tap((orders) => console.log(orders)),
          catchError(() => EMPTY)
        )
      )
    )
  );
  public addOrders$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Orders] Add Orders'),
        map((action: any) => this.ordersService.addOrder(action.order))
      ),
    { dispatch: false }
  );
  public deleteOrders$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Orders] Delete Orders'),
        map((action: any) => this.ordersService.deleteOrder(action.order))
      ),
    { dispatch: false }
  );
  public updateOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Orders] Update Order'),
      tap((action: any) => this.ordersService.updateOrder(action.order)),
      map((order) => ({
        type: '[Orders] Select Item',
        order: order.order,
      })),
      tap((order) => console.log(order)),
      catchError(() => EMPTY)
    )
  );
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {}
}
