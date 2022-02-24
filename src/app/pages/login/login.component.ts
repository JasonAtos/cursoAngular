import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { selectUserFullState } from 'src/app/state/selectors/user.selector';
import { AppState } from 'src/app/state/state';
export interface singInData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public fieldStyle: MatFormFieldAppearance = "fill";
  public signInForm!: FormGroup;
  constructor(
    private readonly store: Store<AppState>,
    private readonly auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.signInForm = this.initialSignInFormPattern();
    this.store.select(selectUserFullState).subscribe((userState) => {
      console.log(userState)
    })
  }

  private initialSignInFormPattern(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  public signIn(): void {
    const signData: singInData = this.signInForm.value;
    this.auth.signIn(signData.email, signData.password);
  }


}
