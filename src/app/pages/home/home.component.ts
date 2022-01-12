import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) +1600;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)
    if(this.peliculaService.cargando) return;
    
    if(pos > max){
      this.peliculaService.getCartelera()
      .subscribe(res => {
        this.movies.push(...res.results);
      }) 
    }    
  }

  public movies: Movie[] = [];
  public movieSlide: Movie[] = [];

  constructor(
    private peliculaService: PeliculaService,
  ) { }

  ngOnInit(): void {
    this.peliculaService.getCartelera()
    .subscribe((res) => {      
      this.movies = res.results;  
      this.movieSlide = res.results;
    });
  }

  ngOnDestroy(): void {
      this.peliculaService.resetCartelera();
  }

}
