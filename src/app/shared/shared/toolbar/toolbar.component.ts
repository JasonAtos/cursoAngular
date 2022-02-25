import { AuthServiceService } from './../../../modules/auth/auth-service.service';
import { AppState } from 'src/app/state/state';
import { User } from './../../../models/user.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { activeUserSelector } from 'src/app/state/selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user$: Observable<User | undefined> = new Observable();
  user!: User | undefined;

  constructor(private store: Store<AppState>, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.user$ = this.store.select(activeUserSelector)
    this.user$.subscribe(user => this.user = user)
  }

  logOut(){
    this.authService.safeSignOut();
  }

}
