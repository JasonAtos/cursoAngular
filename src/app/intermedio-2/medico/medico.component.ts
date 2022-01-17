import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'
})
export class MedicoComponent implements OnInit {


  medicos: any[] = []

  constructor(
    public medicoService: MedicoService,
  ) { }

  ngOnInit(): void {
  }

  saludos(nombre:string){
    return `Hola ${nombre}`
  }

  obtenerMedicos(){
    this.medicoService.getMedicos()
    .subscribe((med: any) => {
      this.medicos = med;
    })
  }
}
