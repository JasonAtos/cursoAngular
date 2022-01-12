import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { DetailResponse } from '../../interfaces/Detail-response';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/Credits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  movie: DetailResponse = {} as DetailResponse;
  cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculaService: PeliculaService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;

    combineLatest([
      this.peliculaService.getPeliculaDetalle(id),
      this.peliculaService.getCredits(id)
    ]).subscribe(([pelicula, cast]) => {
      console.log(pelicula, cast);     
      if(!pelicula) { 
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = pelicula;
      this.cast = cast.filter(f => f.profile_path != null);
    })

    // this.peliculaService.getPeliculaDetalle(id)
    // .subscribe(res => {
    //   if(!res) { 
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.movie = res;      
    // });

    // this.peliculaService.getCredits(id)
    // .subscribe(res => {
    //   this.cast = res.filter(f => f.profile_path != null);
    // })

  }

  volver(){
    this.location.back();
  }

}
