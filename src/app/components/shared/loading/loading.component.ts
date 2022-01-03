import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: [
  ]
})
export class LoadingComponent implements OnInit {

  faSpinner = faSpinner;  

  constructor() { }

  ngOnInit(): void {
  }

}
