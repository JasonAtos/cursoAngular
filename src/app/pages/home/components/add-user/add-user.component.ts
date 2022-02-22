import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser } from '@state/actions/users.actions';
import { AppState } from '@state/app.state';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: '',
      email: ['', Validators.email],
      password: '',
    });
  }
  onSubmit = () => {
    console.log(this.formGroup.status);
    this.store.dispatch(addUser({ user: this.formGroup.value }));
  };
}
