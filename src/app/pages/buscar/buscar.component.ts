import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  texto:string = '';
  movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculaService: PeliculaService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.texto = res['texto'];
      this.peliculaService.buscarPelicula(res['texto'])      
      .subscribe(res => {
        this.movies = res;
        
      })
    })
  }

}
