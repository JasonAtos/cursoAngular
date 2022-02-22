import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { AppState } from '../../store/app.state';
import { selectAuthenticated } from '../../store/selectors/app.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  autorized: Observable<boolean> = new Observable();
  
  
  constructor(
    fb: FormBuilder,
    private router : Router,
    private authService:AuthService,
    private store:Store <AppState>,    
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.autorized = this.store.select(selectAuthenticated);      
  }

  login () {
    const { email, password } = this.form.value;
    this.authService.login(email, password);

    this.autorized.subscribe((value)=> {
      if(value)
        this.router.navigate(['/dashboard']);
      else
        this.form.reset();
    });
  }

  // error(){
  //   this.snackBar.open('Credenciales incorrectas', '', {
  //     duration: 1500,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom',
  //   });
  // }
}
