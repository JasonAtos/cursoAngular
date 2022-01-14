import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  single: any[] = [];

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore.collection('goty').valueChanges()
    .pipe(
      map( (res: any) => 
        res.map( ({name, votos}: any) => 
          ({name, value: votos}) )
    )
    )
    .subscribe(resFinal => {
      // console.log(resFinal);
      this.single = resFinal;  
    })
  }

}
