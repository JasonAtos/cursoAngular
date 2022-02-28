import { Component, OnInit } from '@angular/core';
import { loadUsers } from '@state/actions/users.actions';
import { AppState } from '@state/app.state';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './components/add-user/add-user.component';
import { User } from '@models/user';
import { selectUserName } from '@state/selectors/login.selector';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>, private dialog: MatDialog) {}
  public userName$: Observable<string> = this.store.select(selectUserName).pipe(
    map((user: User) => {
      return user.name;
    })
  );
  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
  public openDialog() {
    const user: User = {
      id: '',
      name: '',
      email: '',
      password: '',
      role: '',
    };
    this.dialog.open(AddUserComponent, { data: user });
  }
}
