import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel [] = [];
  cargando:boolean = false;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroesService.getHeroes()
    .subscribe(resp =>{
      this.heroes = resp;
      this.cargando = false;
    });
  }

  borrarHeroe(hero:HeroeModel, posicion: number){
    Swal.fire({
      title: 'Seguro?',
      text: `Estas a punto de eliminar a ${hero.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(resp => {
      if(resp.value){
        this.heroesService.borrarHeroe(hero.id).subscribe();
        this.heroes.splice(posicion, 1);      
      }
    })



  }

}
