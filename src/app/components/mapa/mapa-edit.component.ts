import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mapa-edit',
  templateUrl: './mapa-edit.component.html',
  styleUrls: ['./mapa-edit.component.css']
})
export class MapaEditComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.forma = formBuilder.group({
      'titulo': data.titulo,
      'desc': data.desc
    });
    console.log(data);
   }

  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.forma.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
