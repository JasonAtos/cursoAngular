import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { Food } from '../../interfaces/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class DashboardComponent implements OnInit {

  data: Food[];

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(
    private pageService: PagesService,
  ) {
    this.data = pageService.getData();
   }

  ngOnInit(): void {
  }
}
