import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://strong-host-335317-default-rtdb.firebaseio.com/';

  constructor(
    private http: HttpClient
  ) { }

  crearHeroe(hero: HeroeModel){
    const temp = this.quitarId(hero);
    return this.http.post(`${this.url}heroes.json`, temp)
    .pipe(
      map((resp: any) => hero.id = resp.name)
    );
  };


  actualizarHerore(hero: HeroeModel){
    const temp = this.quitarId(hero);
    return this.http.put(`${this.url}heroes/${hero.id}.json`, temp)
  }

  quitarId(hero:HeroeModel){
    const temp:any = {
      ...hero
    };
    delete temp['id'];
    return temp;
  }


}
