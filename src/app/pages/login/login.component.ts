import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    fb: FormBuilder,
    private router : Router,
    private authService:AuthService
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    const { email, password } = this.form.value;
    this.authService.login(email, password)
      .then(() => {
        this.router.navigate(['dashboard']);       
      })
      .catch(e => {
        console.log(e);     
        this.form.reset();

      })
      .finally(() => {
        this.loading = false;
      })

    
    // if (usuario === 'admin' && password === 'admin') {
    //   // this.fakeLoading();
    //   this.router.navigate(['dashboard']);
    // } else {
    //   // this.error();
    //   this.form.reset();
    // }
  }

  // error(){
  //   this.snackBar.open('Credenciales incorrectas', '', {
  //     duration: 1500,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom',
  //   });
  // }

  // fakeLoading() {
  //   this.loading = true;
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 1000);
  // }
}
