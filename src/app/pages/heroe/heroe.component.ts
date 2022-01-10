import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(
    private heroService: HeroesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo' && id !== null){
      this.heroService.getHeroeById(id)
      .subscribe( (resp: any) => {        
        this.heroe = resp;
        this.heroe.id = id;        
      });
    }
  }

  guardar(form: NgForm) {
    if(form.invalid) return

    Swal.fire({
      title: 'Espere',
      text: 'Guardando',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();


    let peticion: Observable<any>;


    if(this.heroe.id === ''){
      peticion = this.heroService.crearHeroe(this.heroe);    
    }
    else{
      peticion = this.heroService.actualizarHerore(this.heroe); 
    }

    peticion.subscribe(r => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Operacion exitosa',
        icon: 'success'
      })
    });

  }

}