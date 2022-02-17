import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public dataSource!: User[];
  public displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  constructor(private userSrv: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers() {
    this.userSrv.getUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }
}
