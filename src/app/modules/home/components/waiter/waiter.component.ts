import { dessert } from './../../../../models/restaurant.models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {
  menu$ !: Observable<dessert[]>
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.menu$ = this.service.getMenu();
  }

}
