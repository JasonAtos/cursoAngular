import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { dessert } from 'src/app/models/restaurant.models';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {
  menu$ !: Observable<dessert[]>
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.menu$ = this.service.getMenu();
  }

}
