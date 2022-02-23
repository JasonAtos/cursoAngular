import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { Food } from '../../interfaces/food.model';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {
  menu: Food[];  

  constructor(
    private pagesService: PagesService,
  ) {
    this.menu = pagesService.getData();
   }

  ngOnInit(): void {
  }

}
