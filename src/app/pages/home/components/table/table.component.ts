import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models/user';
import { selectUsers } from '@state/selectors/users.selector';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { deleteUser } from '@state/actions/users.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public dataSource!: User[];
  public displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'password',
    'update',
    'delete',
  ];
  public users$: Observable<User[]> = new Observable();
  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers() {
    this.store
      .select(selectUsers)
      .subscribe((users) => (this.dataSource = users));
  }
  public updateUser(user: string) {
    alert(user);
  }
  public deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.store.dispatch(deleteUser({ id }));
      this.snackBar.open('User deleted', '', { duration: 2000 });
    }
  }
}
