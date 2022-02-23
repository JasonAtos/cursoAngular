import { activeSessionSelector, activeUserSelector } from './../../../../state/selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  isSessionActive$ : Observable<boolean> = new Observable()
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
   this.isSessionActive$ = this.store.select(activeSessionSelector)
  }

}
