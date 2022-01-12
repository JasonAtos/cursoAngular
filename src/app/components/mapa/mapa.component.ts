import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MapaEditComponent } from './mapa-edit.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title = 'My first AGM project';
  lat:number = 51.678418;
  lng:number = 7.809007;

  marcadores:Marcador[] = [];

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    const marks = localStorage.getItem('marcadores');
    if(marks){
      this.marcadores = JSON.parse(marks);
    }

   }

  ngOnInit(): void {
  }

  agregarMarcador({coords}:any){
    const {lat, lng} = coords;
    this.marcadores.push(new Marcador(lat, lng)); 
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar' , {duration : 1500});
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(index: number){
    this.marcadores.splice(index, 1);
    this.guardarStorage();   
    this.snackBar.open('Marcador eliminado', 'Cerrar' , {duration : 1500}); 
  }

  editarMarcador(marcador: Marcador){
    const dialogRef = this.dialog.open(MapaEditComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(!result) return;
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;
      this.guardarStorage();
    });

  }

}
