import { AuthServiceService } from './modules/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private autService: AuthServiceService){}
  ngOnInit(): void {
    this.autService.checkIfLogIn();
  }
}
