import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models/user';
import { selectUsers } from '@state/selectors/users.selector';
import { Store } from '@ngrx/store';
import { loadUsers } from '@state/actions/users.actions';
import { AppState } from '@state/app.state';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public dataSource!: User[];
  public displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  public users$: Observable<User[]> = new Observable();
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.getUsers();
    this.store.dispatch(loadUsers());
  }
  public getUsers() {
    this.store
      .select(selectUsers)
      .subscribe((users) => (this.dataSource = users));
  }
}
