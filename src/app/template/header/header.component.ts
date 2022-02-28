import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}
  public logout() {
    this.fireAuth.signOut();
    //route navigate to login
    this.router.navigate(['/login']);
  }
}
