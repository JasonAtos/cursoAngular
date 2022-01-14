import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { FireBaseResponse } from '../../interfaces/FireBaseResponse';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: FireBaseResponse[] = [];

  constructor(
    public gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.gameService.getGames()
    .subscribe(res => {
      this.juegos = res;      
    })
  }

  votar(juego: FireBaseResponse){
    this.gameService.votarJuego(juego.id)
    .subscribe((res:any) => {
      if(res.ok){
        Swal.fire({         
          icon: 'success',
          title: 'Gracias',
          text: res.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

}
