import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models/user';
import { selectUsers } from '@state/selectors/users.selector';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { deleteUser } from '@state/actions/users.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public dataSource!: MatTableDataSource<User>;
  public displayedColumns: string[] = [
    'name',
    'email',
    'password',
    'update',
    'delete',
  ];
  public users$: Observable<User[]> = new Observable();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers() {
    this.store.select(selectUsers).subscribe((users: User[]) => {
      this.dataSource = new MatTableDataSource<User>(users);
      this.dataSource.paginator = this.paginator;
    });
  }
  public updateUser(user: User) {
    this.dialog.open(AddUserComponent, { data: user });
  }
  public deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.store.dispatch(deleteUser({ id }));
      this.snackBar.open('User deleted', '', { duration: 2000 });
    }
  }
  public filtrar = (event: Event) => {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  };
}
