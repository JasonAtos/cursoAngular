import { Injectable } from '@angular/core';
import { menu } from '../pages/data';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  getData(): Observable<any> {
    // return menu;
    return of(menu).pipe(
      delay(1000) //simulates response time from server
    )
  }

  getDataClassic() {
    return menu;
  }

}
