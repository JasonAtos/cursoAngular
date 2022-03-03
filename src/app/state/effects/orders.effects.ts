import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ServiceService } from '../../modules/home/service.service';

@Injectable()
export class ordersEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Orders] Load orders'),
    mergeMap(() => this.service.getOrders()
      .pipe(
        map(orders => ({ type: '[Orders] Orders Loaded', orders: orders })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: ServiceService
  ) {}
}
