import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [
  ]
})
export class SwitchComponent implements OnInit {

  alerta:string = "warning";

  constructor() { }

  ngOnInit(): void {
  }

}
