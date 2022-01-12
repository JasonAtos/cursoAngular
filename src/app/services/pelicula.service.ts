import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { DetailResponse } from '../interfaces/Detail-response';
import { CreditsResponse, Cast } from '../interfaces/Credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private baseUrl:string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;

  constructor(
    private http: HttpClient,
  ) { }

  get params(){
    return {
      api_key:'e67348801dd8e18e0cf7889592054eb5',
      languaje: 'es-ES',
      page: this.carteleraPage,
      include_adult: true,
    }
  }

  getCartelera():Observable<CarteleraResponse> {
    this.cargando = true;    
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    })
    .pipe(
      tap(()=> {
        this.carteleraPage+= 1;
        this.cargando = false;
      }),      
    )
  }

  buscarPelicula(query:string): Observable<Movie[]>{
    const params = {
      ...this.params, 
      page:1,
      query,
    };

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {params})
    .pipe(
      map(res => res.results)
    )
  }

  resetCartelera(){
    this.carteleraPage = 1;
  }

  getPeliculaDetalle(id:number){    
    return this.http.get<DetailResponse>(`${this.baseUrl}/movie/${id}`, {params: this.params})
    .pipe(
      catchError(err => of(null))
    );
  }

  getCredits(id:number): Observable<Cast[]>{
   // https://api.themoviedb.org/3/movie/580489/credits?api_key=<<api_key>>&language=es-ES 
   return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {params: this.params})
   .pipe(     
     map(res => res.cast),
     catchError(err => of([]))     
   )

  }
}