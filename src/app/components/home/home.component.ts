import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit { 
  
  nuevasCanciones: any[] = [];
  loading:boolean = true;
  error: boolean = false;
  mensaje:string = '';

  constructor(
    private spotifyService: SpotifyService
  ) {
      this.spotifyService.getNewReleases()
      .subscribe((data:any) =>{ 
        this.nuevasCanciones = data
        this.loading = false;
      },
      ({error:{error}}) => {
        console.log(error);
        this.error = true;
        this.loading = false;
        this.mensaje = error.message;

      })      
    }       

  ngOnInit(): void {
  }

}