import { Injectable } from '@angular/core';
import { menu } from '../pages/data';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  getData() {
    return menu;
  }

}
