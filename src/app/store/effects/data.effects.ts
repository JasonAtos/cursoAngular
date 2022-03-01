import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, EMPTY } from 'rxjs';
import { PagesService } from '../../services/pages.service';


@Injectable()
export class DataEffects {
    loadData$ = createEffect(() => { return this.actions$.pipe(
        ofType('[Data Collection] Load Data'),
        mergeMap(() => this.pagesService.getData() //mergeMap combina los obserbabbles
        .pipe(
            map(data => ({type: '[Data Collection] Loaded Data', data})
            ),//en este punto la api ya respondio, el type es para disparar otra accion
            catchError(() => EMPTY)
        ))
    ) });
        
    constructor(
        private actions$: Actions,
        private pagesService: PagesService,
    ){}
}
