import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KitchenService } from 'src/app/services/kitchen.service';
import { Order } from 'src/models/orders.model';

@Component({
  selector: 'app-kitchen-home',
  templateUrl: './kitchen-home.component.html',
  styleUrls: ['./kitchen-home.component.scss']
})
export class KitchenHomeComponent implements OnInit {
  public orders$!:Observable<Array<Order>>;
  constructor(
    private readonly kitchen:KitchenService,
  ) { }
  ngOnInit(): void { }

}
