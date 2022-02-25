import { AppState } from './../../../../state/state';
import { User } from './../../../../models/user.models';
import { AuthServiceService } from './../../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  user!: User;
  visbility: boolean = false;
  constructor(private auth: AuthServiceService) {
  }

  ngOnInit(): void {
  }
  showPassword() {
    this.visbility = !this.visbility;
  }
  login(signForm: FormGroup) {
    const email = signForm.value.email;
    const password = signForm.value.password;
    this.auth.login(email, password);
  }
}
