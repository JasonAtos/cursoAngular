import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {
  artista: any = {};
  loading = true;
  toptracks: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private service:SpotifyService,
  ) {
    this.router.params.subscribe(param => {
      this.getArtista(param['id']);
      this.getToptracks(param['id']);

    })
  }

  getArtista(id:string){
    this.service.getArtista(id)
    .subscribe(data => {                 
      this.loading = false;
      this.artista = data;          
    })
  }


  getToptracks(id:string){
    this.service.getArtistTopTracks(id)
    .subscribe(data => {     
      console.log(data);       
      this.loading = false;
      this.toptracks = data;          
    })
  }

}