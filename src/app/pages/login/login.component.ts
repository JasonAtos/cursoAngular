import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '@state/actions/login.actions';
import { AppState } from '@state/app.state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup;
  public hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  public getErrorMessage() {
    if (this.formGroup.value.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.formGroup.value.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  public onSubmit() {
    console.log(this.formGroup.status);
    if (this.formGroup.status === 'VALID') {
      const user: { email: string; password: string } = {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
      };
      this.store.dispatch(login({ user }));
      console.log(this.formGroup.value);
    }
  }
}
