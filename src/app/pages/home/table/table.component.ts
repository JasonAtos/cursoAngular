import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private userSrv: UserService) {}
  public dataSource!: User[];
  displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  public observablemio!: Observable<User[]>;
  ngOnInit(): void {
    this.userSrv.getUsers().subscribe((users) => {
      console.log(users);
      this.dataSource = users;
      console.log(this.dataSource);
    });
    this.observablemio = this.userSrv.getUsers();
  }
  /*   dataSource = this.data; */
}
