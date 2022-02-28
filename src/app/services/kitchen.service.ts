import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Food } from 'src/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  constructor(
    private readonly afs:AngularFirestore,
  ) { }

  public retrieveMenu():Observable<Array<Food>> {
    return this.afs.collection<Food>(`menu`).valueChanges({idField:'id'});
  }

}
