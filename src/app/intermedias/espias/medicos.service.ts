import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { mensaje } from '../../basicas/string/string';

@Injectable()
export class MedicosService {

  mensajeError: string = '';

  constructor(public http: HttpClient) { }

  getMedicos() {
    return this.http.get('...')
    .pipe(
      map( (resp:any) => resp['medicos'] )
      )
                
  }

  agregarMedico( medico: any ) {
    return this.http.post('...', medico )
    .pipe(
      map( (resp:any) => resp['medico'] )
      )
      // .subscribe(
      //   med => console.log(med),
      //   err => this.mensajeError = err
      
      // )
                
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' )
    .pipe(
      map( (resp:any) => resp['medico'] )
      )
                
  }


}
