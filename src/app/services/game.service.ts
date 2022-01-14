import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { FireBaseResponse } from '../interfaces/FireBaseResponse';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: FireBaseResponse[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getGames(): Observable<FireBaseResponse[]>{
    //Con esta validacion se evita que se envie la peticion cada que el usuario ingrese a la pestaña
    //y se almacena en cache
    console.log('cache');
    if(this.juegos.length > 0){
      return of(this.juegos)
    }
    else{
      console.log('internet');
      
      return this.http.get<FireBaseResponse[]>(`${environment.url}/api/goty`)
      .pipe(
        tap(res => this.juegos = res)
      );      
    }
  }

  votarJuego(id: string){
    return this.http.post(`${environment.url}/api/goty/${id}`, {})
    .pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    )
  }

}
