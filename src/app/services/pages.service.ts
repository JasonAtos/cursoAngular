import { Injectable } from '@angular/core';
import { menu } from '../pages/data';
import { BillState } from '../interfaces/bill.state';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  getData() {
    return menu;
  }

}
