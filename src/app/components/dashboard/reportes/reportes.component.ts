import { Component, OnInit } from '@angular/core';
// import * as _ from 'lodash';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  myList = [
    '1',
    '2',
    '3',
    '3',
    '4',
    '1',
  ]

  // newArray = _.chunk(this.myList, 3); 
  // newArray = _.difference (this.myList, ['1', '3']);
  // newArray = _.join(this.myList, '|');
  // newArray = _.without(this.myList, '3');

  constructor() { 
    // console.log(this.newArray);
    
  }

  ngOnInit(): void {
  }

}
