import { Component,  Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',  
})
export class TarjetasComponent  {

  @Input() items:any[] = [];

  constructor(
    private router: Router,
  ) {}

   verArtista(item:any){
     let artistaId:string;
     if(item.type === 'album')
        artistaId = item.artists[0].id;
     else
        artistaId = item.id;

      this.router.navigate(['/artista', artistaId]);           
   }

}