import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/cartelera-response';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[] = [];


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.movies);
    
  }

  movieClick(movie: Movie){
    this.router.navigate(['/pelicula', movie.id]);
  }

}
